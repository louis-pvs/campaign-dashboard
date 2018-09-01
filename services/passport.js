const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

function createNewUserByGoogleProfile(googleProfile) {
  const userModel = mongoose.model('users');
  const { displayName, id: googleID } = googleProfile;
  return new userModel({ googleID, displayName })
    .save()
    .then(user => user)
    .catch(err => new Error(err));
}

function findUserByGoogleID(googleID) {
  const userModel = mongoose.model('users');
  return userModel
    .findOne({ googleID })
    .then(user => user)
    .catch(err => new Error(err));
}

function findUserByID(oid) {
  const userModel = mongoose.model('users');
  return userModel
    .findById(oid)
    .then(user => user)
    .catch(err => new Error(err));
}

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  findUserByID(id).then(user => done(null, user))
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      const googleID = profile.id;
      findUserByGoogleID(googleID)
        .then(existingUser => {
          if (existingUser) return existingUser;
          else return createNewUserByGoogleProfile(profile);
        })
        .then(user => done(null, user))
        .catch(err => done(err, null));
    }
  )
);

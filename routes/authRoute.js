const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (_, res) => {
      res.redirect('/dashboard/');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ user: null });
  });

  app.get('/api/current_user', (req, res) => {
    res.send({ user: req.user });
  });
};

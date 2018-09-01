const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const { PORT } = process.env;
const app = express();
const threeDaysInMillisecond = 259200000;

app.use(bodyParser.json());
app.use(
  cookieSession({ maxAge: threeDaysInMillisecond, keys: [keys.cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoute')(app);
require('./routes/billingRoute')(app);
require('./routes/staticFilesRoute')(app);
require('./services/passport');
require('./models/userModel');

mongoose.connect(keys.mongoURI);
app.listen(PORT || 3001);

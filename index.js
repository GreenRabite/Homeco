const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require("./services/passport");


mongoose.connect(keys.mongoURI);

const app = express();

// how long the cookie last in ms
app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })
);

// tells passport to use cookies for authentication
app.use(passport.initialize()); //passport.initialize() - initialize passport library to use it (create an instance?) in our app
app.use(passport.session()); //passport.session() - authenticate session for passport that we have created (cookieSession in our case)

require('./routes/auth_routes')(app);

// instruct Node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

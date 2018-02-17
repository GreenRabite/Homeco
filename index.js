const express = require('express');
// require in passport middleware
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');

// router handler
const app = express();

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
    (accessToken, refreshToken, profile, done)=>{
      console.log('accessToken',accessToken);
      console.log('refreshToken',refreshToken);
      console.log('profile',profile);
    }
  )
);

// route handling to pass back to google with code.
// scope tells google what information we need
app.get("/auth/google",passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));


// instruct Express to instruct Node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

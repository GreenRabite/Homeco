// require in passport middleware
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
    (accessToken, refreshToken, profile, done)=>{
      new User({
        googleID: profile.id,
        googleName: profile.name.givenName
      }).save();
    }
  )
);

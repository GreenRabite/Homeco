// require in passport middleware
const passport = require('passport');
//need local strategy as well -- Luuu
const LocalStrategry = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
  done(null,user.id); //first argument is error process, second is identfying info
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
    done(null,user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done)=>{
    User.findOne({googleId: profile.id}).then((existingUser)=>{
      console.log(profile);
      if (existingUser) {
        done(null, existingUser); // Login the user
      } else {
        new User({googleId: profile.id}).save().then((user)=>(done(null,user)));
      }
    });
  }
  )
);

//For local signup, not sure if it's corrrect way to do it
passport.use('local-signup', new LocalStrategry({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
  },
  function(req, username, password, done){
    process.nextTick(function(){
      User.findOne({'local.username': username}, function(err, user){
        if (err) {
          return done(err);
        } else if (user) {
          return done(null, false, req.flash('signupMessage', 'Email already taken'));
        } else {
          const newUser = new User();
          newUser.local.username = username;
          newUser.local.password = password;
          newUser.save(function(err){
            if (err) {
              throw err;
            }
            return done(null, newUser);
          })
        }
      })
    });
  }

));

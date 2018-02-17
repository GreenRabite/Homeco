const passport = require('passport');

// route handling to pass back to google with code
// scope tells google what information we need
module.exports = (app) => {
  app.get("/auth/google",passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};

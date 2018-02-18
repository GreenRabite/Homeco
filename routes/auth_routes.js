const passport = require('passport');

// route handling to pass back to google with code
// scope tells google what information we need
module.exports = (app) => {
  app.get("/auth/google",passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.post('/api/users', (req, res) => {

  });

  app.get('/api/logout', (req,res) => {
    req.logout(); //attached from passport. Kills the cookie (nil)
    res.send(req.user);
  });

  app.get('/api/current_user', (req,res)=>{
    res.send(req.user);
  });
};

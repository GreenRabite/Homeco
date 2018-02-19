const UserController = require('../controllers/UserController');
const passport = require('passport');


// route handling to pass back to google with code
// scope tells google what information we need
module.exports = (app) => {
  app.get("/auth/google",passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  // local-signup, passport version
  // app.post('/api/users', passport.authenticate('local-signup', {
  //   })
  // );

  // regular way
  app.post('/api/users', (req, res)=>{
    UserController.register(req, res)
  });

  // temporary to check all user from database since I don't have user/pwd for database
  app.get('/api/users', (req, res)=>{
    UserController.findAll(req, res)
  });

  app.post('/api/session', (req, res)=>{
    UserController.login(req, res)
  });
  
  // passport version login
  // app.post('/api/session', passport.authenticate('local-login', {
  //   })
  // );

  app.get('/api/logout', (req,res) => {
    req.logout(); //attached from passport. Kills the cookie (nil)
    res.send(req.user);
  });

  app.get('/api/current_user', (req,res)=>{
    res.send(req.user);
  });
};

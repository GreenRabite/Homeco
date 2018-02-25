// const User = require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.register = function(req, res){
  User.findOne({email: req.body.email}, (err, user)=> {
    if (user) {
      return res.status(400).json(['Email already registered']);
    } else {
      const newUser = new User(req.body);
      newUser.password = bcrypt.hashSync(req.body.password, 10);
      newUser.save((errSaveNewUser, user)=> {
        if (err) {
          return res.status(400).json([errSaveNewUser]);
        } else {
          console.log('=======signed Up=======');
          user.password = undefined;
          res.cookie('user.email', user.email);
          res.cookie('user._id', user._id);
          res.cookie('user.customerType', user.customerType);
          res.cookie('user.category', user.category);
          return res.json(user);
        }
      });
    }
  });
};

exports.login = function(req, res){
  const user = User.findOne({email: req.body.email}, (err, user)=>{
    if (err) {
      return res.status(400).send({errors: err})
    }
    if (!user || !user.comparePwd(req.body.password)) {
      return res.status(401).json(['Wrong Credentials'])
    }
    if (user && user.comparePwd(req.body.password)) {
      const token = jwt.sign({
        email: user.email,
        userId: user._id
      }, 'IWillPutSecretKeyHereLater', {
        expiresIn: "30d"
      });
      user.password = undefined;
      res.cookie('user.email', user.email);
      res.cookie('user.customerType', user.customerType);
      res.cookie('user.category', user.category);
      res.cookie('user._id', user._id);
      return res.json(
        user
        // token: token
      );
    }
  });
};

exports.logOut = function(req, res){
  res.clearCookie('user.email');
  res.clearCookie('user.customerType');
  res.clearCookie('user._id');
  res.clearCookie('user.category');
  return res.json({confirmation: 'loggedOut'})
};

//Temporary to check all User in database
exports.findAll = function(req, res){
  User.find({}, (err, users) => {
    if (err) {
      return res.send({message: err});
    } else {
      return res.json(users);
    }
  });
};


//Temporary, remove user from database
exports.remove = function(req, res){
  if (req.body.email) {
    User.findOneAndRemove({email: req.body.email}, (err, user)=> {
      if (err) {
        return res.send({message: err});
      } else {
        return res.send({confirmation: 'removed'});
      }
    });
  }
  if (req.body.id) {
    User.findOneAndRemove({_id: req.body.id}, (err, user)=>{
      if (err) {
        return res.send({message: err});
      } else {
        return res.send({confirmation: 'removed'});
      }
    })
  } else {
    return res.send({message: 'cannot find user'})
  }
};

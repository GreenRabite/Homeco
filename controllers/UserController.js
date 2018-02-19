// const User = require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.register = function(req, res){
  User.findOne({email: req.body.email}, (err, user)=> {
    if (err) {
      throw err;
    }
    if (user) {
      return res.send({message: 'Email already registered'});
    } else {
      const newUser = new User(req.body);
      newUser.password = bcrypt.hashSync(req.body.password, 10);
      newUser.save((err, user)=> {
        if (err) {
          return res.status(400).send({
            message: err
          });
        } else {
          user.password = undefined;
          return res.json(user);
        }
      });
    }
  });
};

exports.login = function(req, res){
  const user = User.findOne({email: req.body.email}, (err, user)=>{
    if (err) {
      return res.send({message: err})
    }
    if (!user || !user.comparePwd(req.body.password)) {
      return res.send({message: 'Wrong Credentials'})
    }
    if (user && user.comparePwd(req.body.password)) {
      return res.json(user);
    }
  });
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

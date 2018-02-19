// const User = require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.register = function(req, res){
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

exports.findAll = function(req, res){
  User.find({}, (err, users) => {
    if (err) {
      return res.send({message: err});
    } else {
      return res.json(users);
    }
  });
};

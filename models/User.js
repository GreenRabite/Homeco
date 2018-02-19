const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String
});


//Salt/Hash password before User.save
userSchema.pre('save', function(next){
  const user = this;
  // console.log(`$$$$$$$$$${this}$$$$$$$$`);
  // console.log(`========${user.googleId}=========`) => 'undefined';
  if (user._id) {
    return next();
  } else if (this.isModified('password') || this.isNew) {
    bcrypt.getSalt(10, (err, salt)=>{
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, (err, hash)=>{
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

//like User.findByCredentials, find user first, then run comparePwd function
userSchema.methods.comparePwd = function (pwd, callback){
  bcrypt.compare(pwd, this.password, (err, isMatch)=>{
    if (err) {
      return callback(err);
    }
    callback(null, isMatch)
  });
}

userSchema.methods.generateJwt = function(){
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7 );

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(expiry,getTime() / 1000)
  }, 'SECRET_WORD'); // not sure what's that for
};

// should it be? Not sure.
// module.exports = mongoose.model('User', userSchema);
mongoose.model('users',userSchema);

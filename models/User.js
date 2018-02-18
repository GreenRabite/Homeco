const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

// should it be? Not sure.
// module.exports = mongoose.model('User', userSchema);

mongoose.model('users',userSchema);

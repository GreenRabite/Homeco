const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String
});

userSchema.pre('svae', (next)=>{
  const user = this;
  if (this.isModified('password') || this.isNew) {
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

userSchema.methods.comparePwd = function (pwd, callback){
  bcrypt.compare(pwd, this.password, (err, isMatch)=>{
    if (err) {
      return callback(err);
    }
    callback(null, isMatch)''
  });
}

mongoose.model('users',userSchema);

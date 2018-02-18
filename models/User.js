const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String
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

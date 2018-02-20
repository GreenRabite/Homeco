const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;
const bcrpt = require('bcrypt');

const userSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  googleID: String,
  googleName: String,
  email: {
    type: String,
    trim: true,
    unique: true,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  phoneNumber: {
    type: String,
    // required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});


//Salt/Hash password before User.save
// Dumb Code now
// userSchema.pre('save', function(next){
//   const user = this;
//   // console.log(`$$$$$$$$$${this}$$$$$$$$`);
//   // console.log(`========${user.googleId}=========`) => 'undefined';
//   if (user._id) {
//     return next();
//   } else if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, (err, salt)=>{
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, (err, hash)=>{
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });

//like User.findByCredentials, find user first, then run comparePwd function
userSchema.methods.comparePwd = function (pwd){
  return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.generateJwt = function(){
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7 );

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(expiry,getTime() / 1000)
  }, 'SECRET_WORD'); // not sure what's that for
};


mongoose.model('users',userSchema);

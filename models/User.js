const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrpt = require('bcrypt');

const userSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  googleID: String,
  googleName: String,
  // userName: {type: String, required: true, unique: true },
  // passwordDigest: {type: String, required: true},
  // email: {type: String, required: true, unique: true}
});

// userSchema.pre('save', function (next) {
//     let user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });
//
// userSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

mongoose.model('users',userSchema);

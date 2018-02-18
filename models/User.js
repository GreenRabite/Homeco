const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String,
  userName: String,
  passwordDigest: String
});

mongoose.model('users',userSchema);

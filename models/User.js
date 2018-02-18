const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  googleName: String
});

mongoose.model('users',userSchema);

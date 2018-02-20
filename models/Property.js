const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
  address: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('properties',propertySchema);

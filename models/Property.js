const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  lotSizeSqFt: {
    type: String
  },
  finishedSqFt: {
    type: String
  },
  yearBuilt: {
    type: String
  },
  useCode: {
    type: String
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('properties',propertySchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  serviceType: String,
  category: {
    type: String,
    required: true
  },
  serviceRenderCycle: {
    type: Number
  },
  price: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('services',serviceSchema);

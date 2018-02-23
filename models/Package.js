const mongoose = require('mongoose');
const { Schema } = mongoose;

const packageSchema = new Schema({
  _property: {
    type: Schema.Types.ObjectId,
    ref: 'properties'
  },
  _service: [{
    type: Schema.Types.ObjectId,
    ref: 'services'
  }],
  price: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('packages',packageSchema);

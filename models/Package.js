const mongoose = require('mongoose');
const { Schema } = mongoose;

const packageSchema = new Schema({
  _property: {
    type: Schema.Types.ObjectId,
    ref: 'Property'
  },
  _service: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('packages',packageSchema);

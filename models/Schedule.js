const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  _service: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  _package: {
    type: Schema.Types.ObjectId,
    ref: 'Package'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('schedules',scheduleSchema);

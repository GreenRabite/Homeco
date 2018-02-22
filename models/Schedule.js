const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  _service: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  serviceType: {
    type: String
  },
  category: {
    type: String
  },
  _package: {
    type: Schema.Types.ObjectId,
    ref: 'Package'
  },
  workDate: Date,
  _user: {
     type: Schema.Types.ObjectId,
     ref: 'User'
   },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('schedules',scheduleSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  _service: {
    type: Schema.Types.ObjectId,
    ref: 'services'
  },
  serviceType: {
    type: String
  },
  category: {
    type: String
  },
  _package: {
    type: Schema.Types.ObjectId,
    ref: 'packages'
  },
  workDate: Date,
  _user: {
   type: Schema.Types.ObjectId,
   ref: 'users'
  },
 completed: {
   type: Boolean,
   default: false
  },
  description: {
    type: String,
    default: ""
  },
  img_url: {
    type: Array,
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('schedules',scheduleSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const complainSchema = new Schema({
  _schedule: {
    type: Schema.Types.ObjectId,
    ref: 'schedules'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  body: {
    type: String
  },
  process: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('complains', complainSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
  _package: {
    type: Schema.Types.ObjectId,
    ref: 'packages'
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  cardNumber: {
    type: String
  },
  cardHolderName: {
    type: String
  },
  cardCV2: {
    type: Number
  },
  cardExpire: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('payments', paymentSchema);

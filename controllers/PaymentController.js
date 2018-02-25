const mongoose = require('mongoose');
const Payment = mongoose.model('payments');

exports.findOneByUserId = function(req, res){
  Payment.findOne({_user: req.params.userId}, (err, payment)=>{
    if (err) {
      return res.status(400).json(err)
    } else {
      if (payment) {
        payment.cardNumber = payment.cardNumber.slice(payment.cardNumber-4);
      }
      return res.json(payment)
    }
  })
};

exports.createPayment = function(req, res){
  console.log('======creating Payment=======');

};

const mongoose = require('mongoose');
const Complain = mongoose.model('complains');

exports.findOneByUserId = function(req, res){
  Complain.find({_user: req.params.userId}, (err, complains)=>{
    if (err) {
      return res.status(400).json(err)
    } else {
      const result = {};
      complains.forEach(complain=>result[complain._id] = complain)
      return res.json(result);
    }
  })
};

exports.createComplain = function(req, res){
  const newComplain = new Complain(req.body);
  newComplain.save((err, complain)=>{
    if (err) {
      return res.status(400).json({errors: err})
    } else {
      return res.json(complain);
    }
  })
};

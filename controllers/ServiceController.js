const mongoose = require('mongoose');
const Service = mongoose.model('services');
const Schedule = mongoose.model('schedules');

exports.fetchService = function(req,res){
  Service.find({_id: req.params.id}, (err, services)=>{
    if (err) {
      return res.send({errors: err});
    } else {
      return res.json(services[0]);
    }
  });
};

const mongoose = require('mongoose');
const Service = mongoose.model('services');
const Schedule = mongoose.model('schedules');


//need to get current user category
exports.fetchUserSchedules = function(req,res){
  Schedule.find({category: "home clean"}, (err, schedules)=>{
    if (err) {
      return res.send({errors: err});
    } else {
      return res.json(schedules);
    }
  });
};

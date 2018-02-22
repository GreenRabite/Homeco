const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');
const Service = mongoose.model('services');


//need to get current user category
// exports.fetchUserSchedules = function(req,res){
//   Schedule.find({category: req.params.category}, (err, schedules)=>{
//     if (err) {
//       return res.send({errors: err});
//     } else {
//       return res.json(schedules);
//     }
//   });
// };
// {path:'service',select:'_service'}

exports.fetchUserSchedules = function(req,res){
  Schedule.find({category: req.params.category}).populate("12345").
  exec(function(err,schedules){
    // console.log(err);
    console.log(schedules);
    if (err) {
      return res.send({errors: err});
    } else {
      return res.json(schedules);
    }
  });
};

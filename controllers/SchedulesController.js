const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');
const Service = mongoose.model('services');


// need to get current user category
// exports.fetchUserSchedules = function(req,res){
//   Schedule.find({category: req.params.category}, (err, schedules)=>{
//     if (err) {
//       return res.send({errors: err});
//     } else {
//       return res.json(schedules);
//     }
//   });
// };

// exports.fetchUserSchedules = function(req,res){
//   Schedule.find({
//     category: req.params.category,
//     workDate: {$gt: Date.now }
//    }).
//   exec(function(err,schedules){
//     // console.log(err);
//     console.log(schedules);
//     if (err) {
//       return res.send({errors: err});
//     } else {
//       return res.json(schedules);
//     }
//   });
// };

exports.fetchUserSchedules = function(req,res){
  Schedule.find({
    category: req.params.category
    // workDate: {$gt: Date.now }
  }).populate("_service").
  lean().then((schedule)=>{
    res.send(schedule);
  },(err)=>(res.send(err)));
};

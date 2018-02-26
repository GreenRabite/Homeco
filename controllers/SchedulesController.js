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

exports.fetchContractorSchedules = function(req,res){
  let today= new Date();
  let week = new Date(Date.now() + 21 * 24 * 3600 * 1000);
  // week.setDate(today.getDate() + 7);
  Schedule.find({
    category: req.params.category,
    workDate: {$gte: today, $lt: week},
    completed: false
  }).populate("_service").populate({path:'_package', populate:{path:'_property'}}).
  lean().then((schedule)=>{
    res.send(schedule);
  },(err)=>(res.send(err)));
};

exports.fetchUserSchedules = function (req, res) {
  Schedule.find({_user: req.params.userId, completed: req.params.completed}, (err, schedules)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      });
    } else {
      result = {};
      schedules.forEach(schedule=>{
        result[schedule._id] = schedule;
      })
      return res.json(result)
    }
  });
};

exports.updateSchedule = function(req, res){
  Schedule.findByIdAndUpdate(
    req.body.id,
    {workDate: new Date(req.body.workDate)},
    {new: true},
    (err, schedule)=>{
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.json(schedule);
      }
  });
};

// exports.updateWorkSchedule = function(req, res){
//   Schedule.findByIdAndUpdate(
//     req.body._id,
//     {completed: true,
//     description: req.body.description,
//     $push: {img_url: req.body.img_url}},
//     (err, schedule)=>{
//       if (err) {
//         return res.status(400).send(err);
//       } else {
//         console.log(schedule);
//         return res.json(schedule);
//       }
//   });
// };

// issue with promise sending updateWorkSchedule one state later
// exports.updateWorkSchedule = function(req, res){
//   console.log(req.body);
//   Schedule.findByIdAndUpdate(
//     req.body._id,
//     {completed: true,
//     description: req.body.description,
//     $push: {img_url: req.body.img_url}}).
//     populate("_service").populate({path:'_package', populate:{path:'_property'}}).lean()
//     .then((schedule)=>{
//       console.log(schedule);
//       res.send(schedule);
//     },(err)=>(res.send(err)));
// };

exports.updateWorkSchedule = function(req, res){
  console.log(req.body);
  if (req.body['img_url[]'].length >= 1) {
    console.log("img_url found");
    Schedule.findByIdAndUpdate(
      req.body._id,
      {completed: true,
        description: req.body.description,
        // $push: {img_url: req.body['img_url[]']}},{new:true}).
        img_url: req.body['img_url[]']},{new:true}).
        populate("_service").populate({path:'_package', populate:{path:'_property'}}).lean()
        .then((schedule)=>{
          console.log(schedule);
          res.send(schedule);
        },(err)=>(res.send(err)));
  }else {
    console.log("img_url not found");
    Schedule.findByIdAndUpdate(
      req.body._id,
      {completed: true,
        description: req.body.description},{new:true}).
        populate("_service")
        .populate({path:'_package', populate:{path:'_property'}}).lean()
        .then((schedule)=>{
          console.log(schedule);
          res.send(schedule);
        },(err)=>(res.send(err)));
  }
};

exports.fetchFinishSchedules = function(req,res){
  Schedule.find({
    category: req.params.category,
    completed: true
  }).populate("_service").populate({path:'_package', populate:{path:'_property'}}).
  lean().then((schedule)=>{
    res.send(schedule);
  },(err)=>(res.send(err)));
};

const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');

exports.fetchUserSchedules = function (req, res) {
  Schedule.find({_user: req.params.userId}, (err, schedules)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      })
    } else {
      console.log(schedules);
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

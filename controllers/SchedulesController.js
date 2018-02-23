const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');

exports.fetchUserSchedules = function (req, res) {
  Schedule.find({_user: req.params.userId}, (err, schedules)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      })
    } else {
      return res.json(schedules)
    }
  });
};

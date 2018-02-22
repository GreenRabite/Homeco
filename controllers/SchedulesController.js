const Service = mongoose.model('services');
const mongoose = require('mongoose');
const Schedule = mongoose.model('schedules');

export.fetchUserSchedules = function (req, res) {
  Schedule.find({_user: req.params._user})
    .exec(function(err, schedules){
      console.log(schedule);
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(schedules);
      }
    });
};

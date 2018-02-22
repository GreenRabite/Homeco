// const mongoose = require('mongoose');
// const Schedule = mongoose.model('schedules');
const SchedulesController = require('../controllers/SchedulesController');

// exports.fetchUserSchedules = function(req,res){
//   Schedule.find();
// };

module.exports = (app) => {
  app.get(`/api/schedules/:category`, (req, res)=>{
    SchedulesController.fetchUserSchedules(req,res);
  });

};

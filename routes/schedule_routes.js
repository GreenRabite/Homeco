// const mongoose = require('mongoose');
// const Schedule = mongoose.model('schedules');
const SchedulesController = require('../controllers/SchedulesController');

// exports.fetchUserSchedules = function(req,res){
//   Schedule.find();
// };

module.exports = (app) => {
  app.get(`/api/fetchcontschedules/:category`, (req, res)=>{
    SchedulesController.fetchContractorSchedules(req,res);
  });

  app.patch(`/api/contschedules`, (req,res)=>{
    SchedulesController.updateWorkSchedule(req,res);
  });

};

// const mongoose = require('mongoose');
// const Schedule = mongoose.model('schedules');
const SchedulesController = require('../controllers/SchedulesController');

// exports.fetchUserSchedules = function(req,res){
//   Schedule.find();
// };

module.exports = (app) => {

  app.get(`/api/schedules`, (req, res)=>{
    console.log("hello");
    SchedulesController.fetchUserSchedules(req,res);
  });


};

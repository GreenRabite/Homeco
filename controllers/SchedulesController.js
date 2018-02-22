const mongoose = require('mongoose');
const Service = mongoose.model('services');
const Schedule = mongoose.model('schedules');


//need to get current user category
exports.fetchUserSchedules = function(req,res){
  Schedule.find({category: req.params.category}, (err, schedules)=>{
    if (err) {
      return res.send({errors: err});
    } else {
      return res.json(schedules);
    }
  });
};

// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });

const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const Service = mongoose.model('services');
const Package = mongoose.model('packages');
const async = require('async');
const Schedule = mongoose.model('schedules');


exports.fetchPackage = function(p, res){
  let prime = [];
  let plus = [];
  let supreme = [];
  if (p.useCode == 'SingleFamily' && (p.lotSizeSqFt - p.finishedSqFt) > 1000) {
    prime = prime.concat(["Garden maintenance", "Carpet cleaning", "Window cleaning"]);
    plus = plus.concat(["Garden maintenance", "Carpet cleaning", "Window cleaning"]);
    supreme = supreme.concat(["Garden maintenance", "Carpet cleaning", "Window cleaning"]);
  }
  if (p.lotSizeSqFt > 5000){
    prime = prime.concat(['Lawn care']);
    plus = plus.concat(['Lawn care']);
    supreme = supreme.concat(['Lawn care']);
    plus = plus.concat(["Fertilizing"]);
    supreme = supreme.concat(["Fertilizing"]);
  }
  if (p.yearBuilt < 1980){
    prime = prime.concat(["Electronic Inspection", "Plumbing Inspection"]);
    plus = plus.concat(["Electronic Inspection", "Plumbing Inspection"]);
    supreme = supreme.concat(["Electronic Inspection", "Plumbing Inspection"]);
    plus = plus.concat(["Fertilizing", "Roof Insepection"]);
    supreme = supreme.concat(["Fertilizing", "Roof Insepection", "Foundation Inspection"]);
  }
  supreme = supreme.concat(["Pest control","House keeping"]);

  return res.json({
    property: p,
    packages: {
      prime,
      plus,
      supreme
    }
  });
};

exports.createProperty = function(req, res){
  console.log('=======creating property=======');
  console.log(req);
  const newProperty = new Property(req.property);
  newProperty.save((err, property)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      })
    } else {
      console.log(property);
      const serviceId = [];
      async.forEach(req.pac, (service, callback)=>{
        Service.findOne({serviceType: service}, (servErr, serv)=>{
          if (servErr) {
            throw servErr
          } else {
            console.log(serv._id);
            serviceId.push(serv._id);
          }
          callback();
        })
      }, (err)=>{
        if (err) { throw err;}
        console.log('=====log serviceId=======');
        console.log(serviceId);
        const newPackage = new Package({_property: property._id, _service: serviceId});
        newPackage.save((errSavePac, pac)=> {
          if (errSavePac) {
            throw errSavePac
          } else {
            return res.json({
              pac: pac
            })
          }
        })
      });
    }
  })
};

exports.bindUser = function(req, res){
  Property.findOne({_id: req.propertyId}, (err, property)=>{
    if (err) {
      throw err;
    }
    if (property) {
      property._user = req.userId;
      property.save((errSaveProperty, property)=>{
        if (errSaveProperty) {
          return res.status(400).send({
            errors: errSaveProperty
          });
        } else {
          let i = 1;
          async.forEach(req.services, (service, callback)=>{
            Service.findOne({_id: service}, (errFindService, oneService)=>{
              if (errFindService) {
                throw errFindService;
              } else {
                // console.log('========find service=======');
                // console.log('=======working date update========');
                const workDate = new Date(Date.now());
                workDate.setDate(workDate.getDate() + (14 * i));
                const timesInOneYear = Math.floor(365 / oneService.serviceRenderCycle);
                let scheduleInOneYear = [];
                for(i=0; i<timesInOneYear; i++){
                  const scheduleDate = new Date(workDate);
                  scheduleInOneYear.push(scheduleDate)
                  workDate.setDate(workDate.getDate() + oneService.serviceRenderCycle);
                }
                // console.log('~~~~~~~~~~~~~scheduleInOneYear~~~~~~~~~~~~~~');
                // console.log(scheduleInOneYear);
                async.forEach(scheduleInOneYear, (eachScheduleDate, cb)=>{
                  const newSchedule = new Schedule({
                    _service: service,
                    serviceType: oneService.serviceType,
                    category: oneService.category,
                    _package: req.pacId,
                    _user: req.userId,
                    workDate: eachScheduleDate
                  });
                  newSchedule.save((errSaveSchedule, schedule)=>{
                    if (errSaveSchedule) {
                      throw errSaveSchedule;
                    } else {
                      // console.log('=====createSchedule========');
                      // console.log(schedule.workDate);
                    }
                    cb(()=>{i++;});
                  })
                }, callback())
              }
            })
          }, (errLoop)=>{
            if (errLoop) { throw errLoop; }
            Schedule.find({_user: req.userId}, (errFindSchedules, schedules)=>{
              if(errFindSchedules){ throw errFindSchedules;}
              console.log('=========return schedules========');
              return res.json({
                schedules: schedules
              })
            })
          })
        }
      })
    }
  })
}

exports.fineOne = function(req, res){
  Property.findOne({_user: req.params.userId}, (err, property)=>{
    if (err) {
      throw err
    } else {
      return res.json({property: property})
    }
  })

}

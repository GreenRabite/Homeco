const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const Service = mongoose.model('services');
const Package = mongoose.model('packages');
const async = require('async');
const Schedule = mongoose.model('schedules');

const price = {
  "Lawn care": 1300,
  "Garden maintenance": 1200,
  "Fertilizing": 240,
  "Gutter cleaning": 400,
  "Electronic Inspection": 200,
  "Plumbing Inspection": 200,
  "Window cleaning": 200,
  "Carpet cleaning": 200,
  "Pest control": 400,
  "House keeping": 2600,
  "Foundation Inspection": 300,
  "Roof Insepection": 100
};

exports.fetchPackage = function(p, res){
  let prime = [];
  let plus = [];
  let supreme = [];
  if (p.useCode != 'SingleFamily') {
    return res.status(422).json({0: `Sorry, we don't have package provide for ${p.useCode} yet`});
  }
  if (p.useCode == 'SingleFamily') {
    prime.push("Carpet cleaning", "Window cleaning", "Gutter cleaning");
    plus.push("Garden maintenance", "Carpet cleaning", "Window cleaning", "Gutter cleaning");
    supreme.push("Garden maintenance", "Carpet cleaning", "Window cleaning", "Gutter cleaning");
  }
  if (p.lotSizeSqFt > 5000){
    prime.push('Lawn care');
    plus.push('Lawn care', 'Fertilizing');
    supreme.push('Lawn care', 'Fertilizing');
  }
  if (p.yearBuilt < 1980){
    prime.push("Electronic Inspection", "Plumbing Inspection");
    plus.push("Electronic Inspection", "Plumbing Inspection", "Roof Insepection");
    supreme.push("Electronic Inspection", "Plumbing Inspection", "Roof Insepection", "Foundation Inspection");
  }
  plus.push("Pest control");
  supreme.push("Pest control","House keeping");

  async.forEach([prime, plus, supreme], (package, callback)=>{
    let sum = 0;
    async.forEach(package, (service, cb)=>{
      sum += price[service];
      cb();
    }, (errLoopPackage)=>{
      if (errLoopPackage) {
        throw errLoopPackage;
      }
      package.unshift(Math.floor(sum/120) * 10 + 9);
      callback();
    }, (err)=>{
      if (err) {
        res.satus(400).json(err);
      }
    })
  });
  return res.json({
    property: p,
    packages: {
      prime,
      plus,
      supreme
    }
  })
};

exports.createProperty = function(req, res){
  const newProperty = new Property(req.property);
  newProperty.save((err, property)=>{
    if (err) {
      return res.status(400).send({
        errors: err
      })
    } else {
      const serviceId = [];
      async.forEach(req.pac, (service, callback)=>{
        Service.findOne({serviceType: service}, (servErr, serv)=>{
          if (servErr) {
            throw servErr
          } else {
            serviceId.push(serv._id);
          }
          callback();
        })
      }, (err)=>{
        if (err) { throw err;}
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
  });
};

const mongoose = require('mongoose');
const Service = mongoose.model('services');
const Property = mongoose.model('properties');
const Package = mongoose.model('packages');
const Schedule = mongoose.model('schedules');

module.exports = (app) => {

  app.get('/api/property', (req, res)=>{
    Property.find({}, (err, properties)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(properties);
      }
    });
  });

  app.delete('/api/property', (req, res)=>{
    Property.findOneAndRemove({_id: req.body.id}, (err, properties)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json({confirmation:'removed'});
      }
    });
  });

  app.get('/api/packages', (req, res)=>{
    Package.find({}, (err, pacakges)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(pacakges);
      }
    });
  });


  // app.get('/api/packages/:propertyId', (req, res)=>{
  //   Package.find({_property: req.params.propertyId}, (err, pacakge)=>{
  //     if (err) {
  //       return res.json(err);
  //     } else {
  //       return res.json(pacakge)
  //     }
  //   })
  // });



  app.delete('/api/packages', (req, res)=>{
    Package.findOneAndRemove({_id: req.body.id}, (err, packages)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json({confirmation:'removed'});
      }
    });
  });

  app.get('/api/services', (req, res)=> {
    Service.find({}, (err, services)=> {
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(services);
      }
    });
  });

  app.post('/api/services', (req, res)=> {
    const newService = new Service(req.body);
    newService.save((err, service)=> {
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(service);
      }
    });
  });

  app.delete('/api/services', (req, res)=> {
    Service.findOneAndRemove({_id: req.body.id}, (err, service)=> {
      if (err) {
        return res.send({errors:err});
      } else {
        return res.send({confirmation: 'removed'});
      }
    });
  });

  app.get('/api/allschedules', (req, res)=>{
    Schedule.find({}, (err, schedules)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(schedules);
      }
    });
  });

  app.patch('/api/service', (req, res)=>{
    console.log(req.body);
    Service.findByIdAndUpdate(
      req.body.id,
      {price: req.body.price},
      {new: true},
      (err, service)=>{
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.json(service);
        }
      });
  });


};

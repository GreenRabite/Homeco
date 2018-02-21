const mongoose = require('mongoose');
const Service = mongoose.model('services');
const Property = mongoose.model('properties');
const Package = mongoose.model('packages');

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
    Package.find({}, (err, packages)=>{
      if (err) {
        return res.send({errors: err});
      } else {
        return res.json(packages);
      }
    });
  });

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

  app.delete('/api/services/', (req, res)=> {
    Service.findOneAndRemove({_id: req.body.id}, (err, service)=> {
      if (err) {
        return res.send({errors:err});
      } else {
        return res.send({confirmation: 'removed'});
      }
    });
  });
};

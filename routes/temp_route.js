const mongoose = require('mongoose');
const Service = mongoose.model('services');

module.exports = (app) => {

  app.get('/api/services', (req, res)=> {
    Service.find({}, (err, services)=> {
      if (err) {
        return res.send({message: err});
      } else {
        return res.json(services);
      }
    });
  });

  app.post('/api/services', (req, res)=> {
    const newService = new Service(req.body);
    newService.save((err, service)=> {
      if (err) {
        return res.send({message: err});
      } else {
        return res.json(service);
      }
    });
  });

  app.delete('/api/services/', (req, res)=> {
    Service.findOneAndRemove({_id: req.body.id}, (err, service)=> {
      if (err) {
        return res.send({message:err});
      } else {
        return res.send({confirmation: 'removed'});
      }
    });
  });
};

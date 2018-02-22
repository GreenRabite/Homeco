const ServiceController = require('../controllers/ServiceController');

module.exports = (app) => {
  app.get(`/api/services/:id`, (req, res)=>{
    ServiceController.fetchService(req,res);
  });

};

const ServiceController = require('../controllers/ServiceController');

module.exports = (app) => {
  app.get(`/api/services/:id`, (req, res)=>{
    console.log(req.params);
    ServiceController.fetchService(req,res);
  });

};

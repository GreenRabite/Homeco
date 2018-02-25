const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const Service = mongoose.model('services');
const Package = mongoose.model('packages');

exports.findOneByProperty = function(req, res){
  Package.findOne({_property: req._id}).populate('_service').then((package)=>{
    return res.json(package)
  }, (err)=>{
    return res.status(400).send(err)
  })
};

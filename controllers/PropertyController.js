const mongoose = require('mongoose');
// const Property = mongoose.model('properties');

exports.sendPackage = function(propertyInformation, res){
  console.log('======propertyInformation logging out from controller');
  console.log(propertyInformation);



  return res.json({property: propertyInformation});
};

const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const Service = mongoose.model('services');

exports.sendPackage = function(p, res){
  console.log('======propertyInformation logging out from controller');
  console.log(p);

  const prime = [];
  const plus = [];
  const supreme = [];
  const packages = [prime, plus, supreme]
  if (p.useCode == 'SingleFamily' && (p.lotSizeSqFt - p.finishedSqFt) > 1000) {
    packages.forEach(package=>package.concat(["Garden maintenance", "Carpet cleaning", "Window cleaning"]));
  } else if (p.lotSizeSqFt > 5000){
    packages.forEach(package=>package.push("Lawn care"));
    plus.push("Fertilizing");
    supreme.push("Fertilizing");
  } else if (p.yearBuilt < 1980){
    packages.forEach(package=>package.concat(["Electronic Inspection", "Plumbing Inspection"]));
    plus.concat(["Fertilizing", "Roof Insepection"]);
    supreme.concat(["Fertilizing", "Roof Insepection", "Foundation Inspection"]);
  }
  supreme.concat(["Pest control","House keeping"])
  console.log(prime);
  console.log(plus);
  console.log(supreme);

  return res.json({
    property: p,
    packages: {
      prime,
      plus,
      supreme
    }
  });
};

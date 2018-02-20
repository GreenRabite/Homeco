const mongoose = require('mongoose');

const Property = mongoose.model('properties');

module.exports = app => {
  app.post("/api/properties", (req,res) => {
    const { address, _user } = req.body;
    const property = new Property({
      address,
      _user
    });
  });
};

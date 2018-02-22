const keys = require('../config/keys');
const request = require('request');
const fastXmlParser = require('fast-xml-parser');
const PropertyController = require('../controllers/PropertyController');
const PackageController = require('../controllers/PackageController');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.post("/api/property", (req, res)=> {
    const address = req.body.address;
    const cityStateZip = req.body.zipcode;
    // console.log('=======Client address is===========');
    // console.log(address);
    // console.log(cityStateZip);
    const ZWSID = keys.ZWSID;
    const url = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id="
                + ZWSID
                + "&address="
                + address
                + "&citystatezip="
                + cityStateZip;
    // console.log('=======query url is===========');
    // console.log(url);
    request(url, (err, response, body)=>{
      if (err) {
        res.json(err);
      }
      if (!err && response.statusCode == 200) {
        const result = fastXmlParser.parse(body)['SearchResults:searchresults'].response.results.result;
        const propertyInformation = {
          zpid: result.zpid,
          street: result.address.street,
          city: result.address.city,
          state: result.address.state,
          zipcode: result.address.zipcode,
          lat: result.address.latitude,
          lng: result.address.longitude,
          lotSizeSqFt: result.lotSizeSqFt,
          finishedSqFt: result.finishedSqFt,
          yearBuilt: result.yearBuilt,
          useCode: result.useCode
        };
        PropertyController.fetchPackage(propertyInformation, res);
      }
    })
  });

  app.post('/api/package', (req, res)=>{
    const pac = req.body['pac[]'];
    const property = {
      street: req.body['property[street]'],
      city: req.body['property[city]'],
      state: req.body['property[state]'],
      zipcode: req.body['property[zipcode]'],
      lat: req.body['property[latitude]'],
      lng: req.body['property[longitude]'],
      lotSizeSqFt: req.body['property[lotSizeSqFt]'],
      finishedSqFt: req.body['property[finishedSqFt]'],
      yearBuilt: req.body['property[yearBuilt]'],
      useCode: req.body['property[useCode]'],
    };
    PropertyController.createProperty({property, pac}, res);
  });

  app.post('/api/schedules', (req, res)=>{
    const propertyId = req.body['pac[_property]'];
    const userId = req.body['user[_id]'];
    const services = req.body['pac[_service][]'];
    const pacId = req.body['pac[_id]'];
    PropertyController.bindUser({
      propertyId: propertyId,
      userId: userId,
      services: services,
      pacId: pacId
    }, res)
  })
}

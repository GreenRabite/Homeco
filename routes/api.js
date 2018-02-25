const keys = require('../config/keys');
const request = require('request');
const fastXmlParser = require('fast-xml-parser');
const PropertyController = require('../controllers/PropertyController');
const PackageController = require('../controllers/PackageController');
const ScheduleController = require('../controllers/SchedulesController');
const bodyParser = require('body-parser');
const UserController = require('../controllers/UserController');

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
        if (fastXmlParser.parse(body)['SearchResults:searchresults'].message.code !== 0) {
          res.status(400).json('Sorry, we cannot find your property, please try again.')
        } else {
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
      }
    })
  });

  app.get('/api/property/:userId', (req, res)=>{
    PropertyController.fineOne(req, res);
  })

  app.post('/api/package', (req, res)=>{
    const pac = req.body['pac[]'];
    const property = {
      street: req.body['property[street]'],
      city: req.body['property[city]'],
      state: req.body['property[state]'],
      zipcode: req.body['property[zipcode]'],
      lat: req.body['property[lat]'],
      lng: req.body['property[lng]'],
      lotSizeSqFt: req.body['property[lotSizeSqFt]'],
      finishedSqFt: req.body['property[finishedSqFt]'],
      yearBuilt: req.body['property[yearBuilt]'],
      useCode: req.body['property[useCode]'],
    };
    PropertyController.createProperty({property, pac}, res);
  });

  app.post('/api/schedules', (req, res)=>{
    // console.log('======bindUser in user pannel====');
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

  app.get('/api/schedules/:userId/:completed', (req, res) => {
    ScheduleController.fetchUserSchedules(req, res);
  })

  app.patch('/api/schedule', (req, res)=>{
    ScheduleController.updateSchedule(req, res);
  })

  app.post('/api/bundleUser', (req, res)=>{
    // console.log('=======bundleUser call======');
    const propertyId = req.body['pac[_property]'];
    const services = req.body['pac[_service][]'];
    const pacId = req.body['pac[_id]'];
    const user = {
      body: {
        email: req.body['user[email]'],
        password: req.body['user[password]']
      }
    }
    UserController.register(user, res, (user)=>{
      // if (errUser) {
      //   return res.status(400).json(errUser)
      // }
      // console.log('========callback to bindUser=========');
      PropertyController.bindUser({
        propertyId: propertyId,
        userId: user._id,
        services: services,
        pacId: pacId
      }, res, (schedules)=>{
        // console.log('~~~~~~~~ccbb~~~~~~~~~~~');
        // if (errSchedule) {
        //   return res.status(400).json(errSchedule)
        // } else {
          return res.json({
            user: user,
            schedules: schedules
          });
        // }
      })
    })
  })
}

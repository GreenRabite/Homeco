const keys = require('../config/keys');
const request = require('request');
const fastXmlParser = require('fast-xml-parser');

module.exports = (app) => {
  app.post("/api/property", (req, res)=> {
    const address = req.body.address;
    console.log('=======Client address is===========');
    console.log(address);
    const ZWSID = keys.ZWSID;
    const cityStateZip = 'SanFrancisco+CA'
    const url = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id="
                + ZWSID
                + "&address="
                + address
                + "&citystatezip="
                + cityStateZip;
    console.log('=======query url is===========');
    console.log(url);
    request(url, (err, response, body)=>{
      if (err) {
        throw err;
      }
      if (!err && response.statusCode == 200) {
        const result = fastXmlParser.parse(body)['SearchResults:searchresults'].response.results.result;
        const propertyInformation = {
          zpid: result.zpid,
          street: result.address.street,
          zipcode: result.address.zipcode,
          lotSizeSqFt: result.lotSizeSqFt,
          finishedSqFt: result.finishedSqFt,
          finishedSqFt: result.finishedSqFt,
          yearBuilt: result.yearBuilt,
          useCode: result.useCode
        }
        console.log('=======propertyInformation===========');
        console.log(propertyInformation);
      }
    })
  });
}

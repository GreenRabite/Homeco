module.exports = (app) => {
  app.post("/api/property", (req, res)=> {
    const address = req.body.address;
    console.log('==================');
    console.log(address);
    console.log('==================');
  });
}

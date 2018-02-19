const User = require('../model/User');


module.exports = {

  // not sure we need session controller now, cover by passport LocalStrategry
  // const create = (params, callback) => {
  //   User.findOne({username: username}, (err, user)=>{
  //     if (err) {
  //       return callback(err, null)
  //     }
  //     callback(null, user)
  //   })
  // };

  // const destroy = (params, callback) => {
  //
  // };

}

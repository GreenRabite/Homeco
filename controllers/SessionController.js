const User = require('../model/User');

module.exports = {

  const findById = (params, callback) => {
    User.findById(id, (err, user)=>{
      if (err) {
        return callback(err, null)
      }
      // Need to implenment check password function.
      // callback(null, user)
    })
  };

  const create = (params, callback) => {
    // Do we need SessionSchema??
    // Session.create(params, (err, user)=>{
    //   if (err) {
    //     return callback(err, null)
    //   }
    //   callback(null, user)
    // })
  };

  const destroy = (params, callback) => {
    //Session.findBySessionTokenAndRemove(sessionToken, (err)=>{
      // if (err) {
      //   return callback(err, null)
      // }
      // callback(null, null)
  // })
  };

}

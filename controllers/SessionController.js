const User = require('../model/User');

module.exports = {
  const create = (params, callback) => {
    User.findOne({username: username}, (err, user)=>{
      if (err) {
        return callback(err, null)
      }
      callback(null, user)
    })
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

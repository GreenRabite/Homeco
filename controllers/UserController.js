const User = require('../model/User');

module.exports = {

  const create = (params, callback) => {
    User.create(params, (err, user)=>{
      if (err) {
        return callback(err, null)
      }
      callback(null, user)
    })
  };

}

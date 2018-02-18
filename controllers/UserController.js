const User = require('../model/User');

module.exports = {

  const create = (params, callback) => {
    User.create(params, (err, user)=>{
      if (err) {
        callback(err, null)
        return
      }
      callback(null, user)
    })
  };

}

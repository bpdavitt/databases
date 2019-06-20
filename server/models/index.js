var db = require('../db');
//THIS IS THE MODELS FILE

module.exports = {
  messages: {
    get: function (callback) {
      db.findAll({raw:true}).then((results) => {
        console.log(results)
        callback(null,results)
      }).catch((error) => callback(error,null))
      
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.create(message).then((results) => {
        //callback(null, results)
        console.log(results)
        callback(null,null)
      }).catch((error) => {
        callback(error,null)
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


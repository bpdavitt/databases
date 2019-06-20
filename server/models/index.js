var db = require('../db');
//THIS IS THE MODELS FILE

module.exports = {
  messages: {
    get: function (result) {
      db.query('SELECT * from messages', (err, res, fields) => {
        if (err) {
          console.log('Error in get from models', err);
          result(err,null);
        } else {
          result(null, res);
        }

      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.query(`INSERT INTO messages (username, text, roomname) VALUES ("${message.username}", "${message.text}", "${message.roomname}");`, (err, res) => {
        if (err) {
          console.log('Error while posting in models', err);
          callback(err,null);
        } else {
          callback(null,res.insertId);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


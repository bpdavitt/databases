var models = require('../models');
//THIS IS THE CONTROLLERS FILE

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messages) => {
        if (err) {
          console.log('Error in get from controllers', err);
          res.send();
        } else {
          res.send(messages);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body, ' from controllers POST');
      models.messages.post(req.body, (err, messageId) => {
        if (err) {
          console.log('Error in post from controllers', err);
          res.send();
        } else {
          req.body.objectId = messageId;
          res.send(req.body);
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.send('User post received');
    }
  }
};


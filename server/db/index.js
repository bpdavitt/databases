var mysql = require('mysql');
var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'student', 'student', {
  host: 'localhost' 
});

var Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
})

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'student',
//     password : 'student',
//     database : 'chat'
//   });
   
// connection.connect((err) => {
//   if (err) throw err
// });

module.exports = Message;
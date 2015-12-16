var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/reminders');
// I'd recommend creating a `connection.js` file that contains the link.
// You only use the seeds file once, but you need the mongodb link every time you run this app.

var UserModel = require('../models/user');

UserModel.remove({}, function(err){
  console.log(err);
});

var mike = new UserModel({name:"Mike"});

var users = [mike];
// This doesn't save Mike to the database. You need `.save` for that

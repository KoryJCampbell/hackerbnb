var mongoose = require('mongoose');
var conn = mongoose.connect('mongod://localhost/reminders');
var UserModel = require('../models/user');

UserModel.remove({}, function(err){
  console.log(err);
});

var mike = new UserModel({name:"Mike"});

var users = [mike];

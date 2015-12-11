var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectID = Schema.ObjectID;

var UserSchema = new Schema({
  name: String
});

var UserModel = mongoose.model("User", UserSchema);

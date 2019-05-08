//import mongoose
let mongoose = require('mongoose');

// import schema from mongoose
let Schema = mongoose.Schema;

//define schema structure
let profileSchema = new Schema({
    id: String,
    city: String
});

//make one
var user = mongoose.model('User', profileSchema);

profileSchema.methods.updateUser = function(request, response){
    this.user.name = request.body.profile.name;
    this.user.city = request.body.profile.city;
    this.user.save();
    response.redirect('/user');
};

module.exports = mongoose.model('User', profileSchema);

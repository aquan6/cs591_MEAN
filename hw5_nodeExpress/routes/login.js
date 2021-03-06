const express = require('express'),
    app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cs591', {useNewUrlParser: true}, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    }
    //don't need else case for logging, it's below:
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.set('view engine', 'ejs');

module.exports = app;

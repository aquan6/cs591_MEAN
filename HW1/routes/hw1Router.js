var express = require('express');
var router = express.Router();

//res.render or res.send breaks the chain of looking for pattern matching.

/* GET constant JSON object */
router.get('/hw1', function(req, res, next) {
    res.render('hw1', { title: 'Hey now' });
});

/* POST the URL string */
router.post('/hw1', function(req, res, next) {
    res.render('hw1', 'respond with a resource');
});

module.exports = router; //gives access to app.js

var express = require('express');
var router = express.Router();

/* GET constant JSON object */
router.get('/hw1', function(req, res, next) {
    res.render('index', { string: 'Hey now' });
});

/* POST the URL string */
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;

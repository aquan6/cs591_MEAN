var express = require('express');
var router = express.Router();

//we don't use this page actually

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

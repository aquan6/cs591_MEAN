var express = require('express');
var router = express.Router();

//res.render or res.send breaks the chain of looking for pattern matching.

/* GET constant JSON object  */
router.get('/', function(req, res) {
    res.json({ string: 'Hey now' });
});

/* POST the URL string */
router.post('/', function(req, res) {
    const input = req.body;
    res.json({ body: input});
});

module.exports = router; //gives access to app.js

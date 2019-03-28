var express = require('express');
var router = express.Router();

//res.render or res.send breaks the chain of looking for pattern matching.

/* GET constant JSON object  */
router.get('/', function(req, res) {
    let url = 'https://api.linkedin.com/v1/companies/1337/updates?start=20&count=10&format=json';


    const getAPICall = util.promisify(request);

    getAPICall(url).then(data => {
        let content = JSON.parse(data.body);
        //console.log(("joke: ", content.articles));
        //res.render(content.articles);
        const queryPath = (path.join(__dirname , '../views' ,'query.html'));
        console.log(content);
        res.render(queryPath, {
            title1: 'hi',

        });

    }).catch(err => console.log('error: ' , err))
});

module.exports = router; //gives access to app.js

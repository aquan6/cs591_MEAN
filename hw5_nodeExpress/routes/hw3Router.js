const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const util = require('util');
let path = require('path');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

//any references to linkedin are because i couldn't get that api to work! now using news api.

//res.render or res.send breaks the chain of looking for pattern matching.

/* GET constant JSON object  */
app.get('/', function(req, res) {
    //for reading config file
    const fs = require('fs');
    const configPath = (path.join(__dirname , '../config' ,'config.json'));
    const rawdata = fs.readFileSync(configPath);
    const api_json = JSON.parse(rawdata);
        const news_api_key = api_json['api-keys']['News-Api-Key'];

    let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + news_api_key;

    const getAPICall = util.promisify(request);

    getAPICall(url).then(data => {
        let content = JSON.parse(data.body);

        const queryPath = (path.join(__dirname , '../views' ,'query'));
        console.log(content);
        res.render(queryPath, {
            title0: content.articles[0].title,
            title1: content.articles[1].title,
            title2: content.articles[2].title,
            title3: content.articles[3].title,
            title4: content.articles[4].title
        });

    }).catch(err => console.log('error: ' , err))

});

app.listen(8008, () => console.log('Server ready'))

//module.exports = app; //gives access to app.js

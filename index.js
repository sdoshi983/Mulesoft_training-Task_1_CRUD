// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const databaseURL = 'mongodb://localhost:27017/movies'; // database's url to be connected
const port = process.env.PORT || 3000;

mongoose.connect(databaseURL, {useNewUrlParser: true}).then(() => {
    console.log('connected to database successfully .. !');

    const app = express();  // initializing our express app
    app.use(bodyParser.json()); // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
    app.use(bodyParser.urlencoded({extended: false}));  // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option

    app.listen(port, () => {    // starting server
        console.log('server started');
    });
    
}).catch((exception) => {      // handling exception generated on database connectivity
    console.log(exception.toString());
})

// importing necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const databaseURL = 'mongodb://localhost:27017/movies'; // database's url to be connected

mongoose.connect(databaseURL, {useNewUrlParser: true}).then(() => {
    console.log('connected to database successfully .. !');
})

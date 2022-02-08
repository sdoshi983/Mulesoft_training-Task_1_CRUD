const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movie', async (request, response) => {  // fetch
    const data = await Movie.find();
    response.send(data);
});

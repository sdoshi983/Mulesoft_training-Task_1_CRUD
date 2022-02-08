const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movie', async (request, response) => {  // fetch
    const data = await Movie.find();
    response.send(data);
});

router.post('/movie', async (request, response) => {    // insert
    const movie = new Movie(request.body);
    await movie.save();
    response.send(movie);
})

module.exports = router;

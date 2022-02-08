const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/movie', async (request, response) => {  // fetch
    const data = await Movie.find();
    response.send(data);
});

router.get('/movie/:movieName', async (request, response) => {  // fetch by movie
    const movieName = request.params.movieName;
    const data = await Movie.findOne({movieName: movieName});
    response.send(data);
});


router.post('/movie', async (request, response) => {    // insert
    const movie = new Movie(request.body);
    await movie.save();
    response.send(movie);
})

module.exports = router;

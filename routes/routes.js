const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const Movie = require('../models/movie');

// fetch
router.get('/movie', async (request, response) => { 
    const movie = await Movie.find();
    response.send({
        "message": "All the movies details fetched successfully",
        "statusCode": 200,
        "movieDetails": movie
    });
});

// fetch by actor name
router.get('/movie/:actorName', async (request, response) => { 
    const actorName = request.params.actorName;
    const movie = await Movie.findOne({actorName: actorName});
    response.send({
        "message": "Movie details fetched successfully",
        "statusCode": 200,
        "movieDetails": movie
    });
});

// insert
router.post('/movie', async (request, response) => {    
    const movie = new Movie(request.body);
    await movie.save();
    response.send({
        "message": "Data inserted successfully",
        "statusCode": 200,
        "movieDetails": movie
    });
})

// update
router.patch('/movie/:id', async (request, response) => {    
    const _id = request.params.id;
    const movie = await Movie.findByIdAndUpdate(_id, request.body, {new: true});
    response.send({
        "message": "Movies details updated successfully",
        "statusCode": 200,
        "movieDetails": movie
    });
})

// delete a single record
router.delete('/movie/:id', async (request, response) => {   
    try{
        const _id = request.params.id;
        const movie = await Movie.findByIdAndDelete(_id);
        response.send({
            "message": "Movie deleted successfully",
            "statusCode": 200,
            "movieDetails": movie
        });
    }catch (e){
        response.send(e);
    }
})

module.exports = router;

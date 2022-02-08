const mongoose = require('mongoose'); 

// creating movie schema for structuring and managing the No-SQL data in our mongodb collection
const movieSchema = mongoose.Schema({
    movieName: String,
    director: String,
    actor: String,
    actress: String,
    yearOfRelease: Number,
});

module.exports = mongoose.model('Detail', materialSchema);

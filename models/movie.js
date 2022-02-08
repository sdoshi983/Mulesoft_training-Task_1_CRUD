const mongoose = require('mongoose'); 

// creating book schema for structuring and managing the No-SQL data in our mongodb collection
const bookSchema = mongoose.Schema({
    movieName: String,
    director: String,
    actor: String,
    actress: String,
    yearOfRelease: Number,
});
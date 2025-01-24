// title , author, genre, year, available, borrowed

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    author: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    available: {
        type: Boolean,
        required: [true, 'yes it is available']
    }
    
    
})

module.exports = mongoose.model('Book', bookSchema);
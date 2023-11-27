const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    album: {
        type: String,
        required: true,
        trim: true
    },
    song: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    artist: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema);

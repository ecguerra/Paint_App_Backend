const mongoose = require('mongoose')

const Painting = mongoose.model(
    'Painting',
    new mongoose.Schema({
        title: String,
        artist: String,
        date: {type: Date, default: Date.now},
        cloudinaryID: String,
        dataURL: String,
        published: Boolean,
        favs: Number
    })
)

module.exports = Painting
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Album Schema
const CinemaSchema = new Schema({
    name: {
        type: String
    },
    showDayTime: [String]
});

//create Etshow Schema and model
const EtshowSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    synopsis: {
        type: String
    },
    genre: {
        type: String,
        required: [true, 'Genre is required']
    },
    trailerUrl: {
        type: String
    },
    tag: [String],
    cinemas: [CinemaSchema]
});

//Mongoose will plularize it to EtshowS
const Etshow = mongoose.model('etshow', EtshowSchema);

module.exports = Etshow;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Album Schema
const AlbumSchema = new Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    }
});

//create Mezmur Schema and model
const MezmurSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    singer: {
        type: String
    },
    translation: {
        type: String
    },
    tag: [String],
    album: AlbumSchema
});

//Mongoose will plularize it to MezmurS
const Mezmur = mongoose.model('mezmur', MezmurSchema);

module.exports = Mezmur;
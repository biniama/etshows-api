const express = require('express');
const router = express.Router();
const Etshows = require('../models/etshows');

//Get list of Etshows from the db
router.get('/etshows/all', function(request, response, next) {
    Etshows.find({}).then(function(etshows) {
        response.send(etshows);
    });
});

//Get a Etshows from the db by id
router.get('/etshows', function(request, response, next) {
    Etshows.find({_id: request.query.id}).then(function(etshows) {
        response.send(etshows);
    });
});

//Get a Etshows from the db by title
router.get('/etshows/search', function(request, response, next) {
    Etshows.find({title: request.query.title}).then(function(etshows) {
        response.send(etshows);
    });
});

//Get a Etshows from the db by tag
router.get('/etshows/tag', function(request, response, next) {
    Etshows.find({tag: request.query.tag}).then(function(etshows) {
        response.send(etshows);
    });
});

//Get a Etshows from the db by Singer
//Get a Etshows from the db by Album

//Add a new Etshows to the database
router.post('/etshows', function(request, response, next) {
    Etshows.create(request.body).then(function(etshows) {
        response.send(etshows);
    }).catch(next); // error handling next method
});

//Update Etshows that is already in the db
router.put('/etshows/:id', function(request, response, next) {
    Etshows.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(etshows) {
        //get the updated element
        Etshows.findOne({_id: request.params.id}).then(function(etshows) {
            response.send(etshows);
        });
    });
});

//Delete Etshows from the db
router.delete('/etshows/:id', function(request, response, next) {
    Etshows.findByIdAndRemove({_id: request.params.id}).then(function(etshows) {
        response.send(etshows);
    });
});

module.exports = router;
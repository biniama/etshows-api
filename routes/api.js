const express = require('express');
const router = express.Router();
const Mezmur = require('../models/mezmur');

//Get list of Mezmur from the db
router.get('/mezmur/all', function(request, response, next) {
    Mezmur.find({}).then(function(mezmur) {
        response.send(mezmur);
    });
});

//Get a Mezmur from the db by id
router.get('/mezmur', function(request, response, next) {
    Mezmur.find({_id: request.query.id}).then(function(mezmur) {
        response.send(mezmur);
    });
});

//Get a Mezmur from the db by title
router.get('/mezmur/search', function(request, response, next) {
    Mezmur.find({title: request.query.title}).then(function(mezmur) {
        response.send(mezmur);
    });
});

//Get a Mezmur from the db by tag
router.get('/mezmur/tag', function(request, response, next) {
    Mezmur.find({tag: request.query.tag}).then(function(mezmur) {
        response.send(mezmur);
    });
});

//Get a Mezmur from the db by Singer
//Get a Mezmur from the db by Album

//Add a new Mezmur to the database
router.post('/mezmur', function(request, response, next) {
    Mezmur.create(request.body).then(function(mezmur) {
        response.send(mezmur);
    }).catch(next); // error handling next method
});

//Update Mezmur that is already in the db
router.put('/mezmur/:id', function(request, response, next) {
    Mezmur.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(mezmur) {
        //get the updated element
        Mezmur.findOne({_id: request.params.id}).then(function(mezmur) {
            response.send(mezmur);
        });
    });
});

//Delete Mezmur from the db
router.delete('/mezmur/:id', function(request, response, next) {
    Mezmur.findByIdAndRemove({_id: request.params.id}).then(function(mezmur) {
        response.send(mezmur);
    });
});

module.exports = router;
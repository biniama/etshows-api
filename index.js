const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

//setup express app
const app = express();

//connnect to mongodb
mongoose.connect('mongodb://etshows:etshows@127.0.0.1:27017/etshows', {
    useMongoClient: true
});
//because mongoose's Promise is deprecated ???
mongoose.Promise = global.Promise;

//FrontEnd - for providing access to static files in folder = 'public'
app.use(express.static('public'));

//should be before routes.
app.use(bodyParser.json());

//initializes routes and tell app to use the routes defined in /routes/app.js
app.use('/api', routes);

//middleware for error handling - our own code
app.use(function(error, request, response, next) {
    //console.log(error);
    response.status(422).send({error: error.message});
});

//listen for requests
app.listen(process.env.port || 4000, function() {
    console.log("Now listening to requests");
});


'use strict';

var express = require('express'),
    router = express.Router(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    middleware = require('./config/middleware'),
    app = express(),
    http = require('http').Server(app);

// run some basic Express third-party middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + './../client'));

// run application-level middleware (before all routes)
app.use(middleware.cors);

// let app know about all API routes and set to root '/' path
require('./config/routes')(router);
app.use('/', router);

// run application-level middleware (after all routes)
// ... no after-middleware yet

// connect to postgres

// run Express web server
http.listen(3333, function() {
  console.log('Serving on port:', http.address().port);
});

module.exports = app;
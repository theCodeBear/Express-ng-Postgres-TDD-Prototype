'use strict';

var express = require('express'),
    router = express.Router(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    middleware = require('./config/middleware'),
    models = require('./../models'),
    app = express(),
    http = require('http').Server(app);

// use given environment, or 'development' if environment not given
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

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


// run Express web server and sync postgres database
exports.start = function(cb) {
  models.sequelize.sync().then(function() {
    http.listen(config.port, function() {
      console.log('Serving on port:', http.address().port);
      cb && cb();
    });
  });
};

// stop express server
exports.stop = function(cb) {
  http.close(cb);
};

// if file is being run directly from command line, start server.
// otherwise file is being required, so need to use .start and .stop
if (module.id === require.main.id) {
  exports.start();
}
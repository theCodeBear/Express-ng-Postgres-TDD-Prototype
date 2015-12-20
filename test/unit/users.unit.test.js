'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var http = require('http');
var port = require('./../../server/config/config').test.port;
var app = require('../../server/app');


describe('Users', function() {

  before(function(done) {
    app.start(done);
  });



  after(function(done) {
    app.stop(done);
  });

});
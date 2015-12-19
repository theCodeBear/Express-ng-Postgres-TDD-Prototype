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

  describe('get /users', function() {
    it('should return a response', function(done) {
      http.get({port: port, path:'/users'}, function(results) {
        assert.equal(results.statusCode, 200);
        done();
      });
    });
  });

  after(function(done) {
    app.stop(done);
  });

});
'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
// var http = require('http');
var request = require('request');
var port = require('./../../server/config/config').test.port;
// var config = require('./config/config').test;
var app = require('../../server/app');
var models = require('./../../models');


describe('Users', function() {

  // this is the same as: before(function(done) { app.start(done); });
  before(app.start);

  beforeEach(function (done) {
    models.sequelize.truncate().then(function() {
      models.User.create({name: 'Todd'})
      .then(models.User.create({name: 'Kent'}))
      .then(function() {
        done();
      });
    });
  });

  describe('get /users', function() {
    it('should return all users', function(done) {
      request.get('http://localhost:5555/users', function(err, res, body) {
        var bodyArr = body.replace(/[\\"[\]]/g, '');
        assert.equal(bodyArr, ['Todd', 'Kent']);
        done();
      });
    });
  });

  describe('post /users', function() {
    it('should create a user in database', function(done) {
      request.post({
        url: 'http://localhost:5555/users',
        json: true,
        body: {name: 'Grant'}
      }, function(err, res, body) {
        assert.equal(body.name, 'Grant');
        done();
      });
    });
  });

  after(app.stop);

});
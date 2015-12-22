'use strict';

var assert = require('chai').assert;
var request = require('request');
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

  describe('get /users/:name', function() {
    it("should return one user's name", function(done) {
      request.get('http://localhost:5555/users/Kent', function(err, res, body) {
        var name = JSON.parse(body).name;
        assert.equal(name, 'Kent');
        done();
      });
    });
  });

  describe('put /users/:name', function() {
    it("should update a user's name", function(done) {
      request.put({
        url: 'http://localhost:5555/users/Todd',
        json: true,
        body: {name: 'TKrone'}
      }, function(err, res, body) {
        assert.equal(body.name, 'TKrone');
        done();
      });
    });
  });

  describe('delete /users/:name', function() {
    it('should delete one user from the database', function(done) {
      request.del('http://localhost:5555/users/Kent', function(err, res, body) {
        var deleted = JSON.parse(body).deleted;
        assert.equal(deleted, 1);
        done();
      });
    });
  });

  after(app.stop);

});
'use strict';

var assert = require('chai').assert;
var User = require('./../../../server/models/user.model');
var usersController = require('./../../../server/routes/users/index.users');


describe('Users', function() {

  describe('get /users', function() {
    var req, res, statusCode, sentData;

    beforeEach(function(done) {
      res = {
        send: function(data) {
          statusCode = statusCode || 200;
          sentData = data;
          return this;
        },
        status: function(code) {
          statusCode = code;
          return this;
        }
      };
      User.index = function(callback) {
        callback(null, [])
      };
      done();
    });


    it('should return 200', function(done) {
      usersController.index(req, res);
      assert.equal(statusCode, 200);
      done();
    });

    it('should send back nothing if no users in database', function(done) {
      usersController.index(req, res);
      assert.lengthOf(sentData, 0);
      done();
    });

    it('should return 500 on error', function(done) {
      User.index = function(callback) {
        callback({err: '1'}, null);
      };
      usersController.index(req, res);
      assert.equal(statusCode, 500);
      done();
    });

    it('should send back all user names in database', function(done) {
      User.index = function(callback) {
        callback(null, ['Todd', 'Kent']);
      };
      usersController.index(req, res);
      assert.deepEqual(sentData, ['Todd', 'Kent']);
      done();
    });

  });

  describe('get /users/:name', function() {
    var req, res, sentData, statusCode;

    beforeEach(function(done) {
      req = {
        params: { name: 'Kent' }
      };
      res = {
        send: function(data) {
          statusCode = statusCode || 200;
          sentData = data;
          return this;
        },
        status: function(code) {
          statusCode = code;
          return this;
        }
      };
      User.show = function(name, cb) {
        cb(null, ['Kent']);
      };
      done();
    });

    it('should return 200', function(done) {
      usersController.show(req, res);
      assert.equal(statusCode, 200);
      done();
    });

    it('should send back user name in record.name from database', function(done) {
      usersController.show(req, res);
      assert.deepEqual(sentData, ['Kent']);
      done();
    });

    it('should send status 404 if that user name is not in database', function(done) {
      User.show = function(name, cb) {
        cb(null, null);
      };
      usersController.show(req, res);
      assert.equal(statusCode, 404);
      done();
    });

    it('should return 500 on error', function(done) {
      User.show = function(name, cb) {
        cb({err: 1}, null);
      };
      usersController.show(req, res);
      assert.equal(statusCode, 500);
      done();
    });
  });

});
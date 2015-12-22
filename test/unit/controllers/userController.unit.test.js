'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var User = require('./../../server/models/user.model');
var usersController = require('./../../server/routes/users/index.users');


describe('Users', function() {

  describe('get /users', function() {
    var req, res, statusCode, sentData;

    beforeEach(function() {
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

});
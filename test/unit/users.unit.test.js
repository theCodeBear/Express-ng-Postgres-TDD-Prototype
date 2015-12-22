'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var User = require('./../../server/models/user.model');
var userIndex = require('./../../server/routes/users/index.users');


describe('Users', function() {

  // before(function(done) {
    // app.start(done);

  // });

  describe('get /users', function() {
    var req, res, statusCode, sentData;
    res = {
      send: function(code, data) {
        statusCode = code;
        sentData = data;
      }
    };

    it('should return all names from database', function(done) {
      
      // console.log('folder', userIndex);
      // var stub = sinon.stub(UserIndex).;
      // var req = {}, res = {};
      // var spy = res.send = sinon.spy();
      // userIndex(req, res);
      // assert.equal(spy.callCount, 1);
      // assert.equal(spy.calledOnce, true);
      // var stub = sinon.stub(User.index);
      // var callback = stub.returnsArg(0);
      // User.prototype.
      // userIndex(req, res);
      // console.log('cb', callback);
      // callback(err, records)
      // userIndex(function() {

      // });
      // stub.restore();
      // done();
    });
  });

  // describe('get /users', function() {
  //   it('should return an error message and status 500', function(done) {
  //     sinon.stub(User, 'index'.)
  //   });
  // });


  // after(function(done) {
    // app.stop(done);
  // });

});
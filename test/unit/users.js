'use strict';

var assert = require('chai').assert;
var userRoutes = require('../../server/config/routes');
var http = require('http');

describe('Users', function() {

  describe('get /users', function() {
    it('should return a response', function(done) {
      http.get('/users', function(results) {
        console.log(results);
      });
    });
  })

});
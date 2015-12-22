'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');

// returns array of all users' names in database
module.exports = function(req, res) {
  User.index(function(err, records) {
    if (err) return res.send(err).status(500);
    return res.send(records);
  });
};
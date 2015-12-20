'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');

// returns object of newly saved user
module.exports = function(req, res) {
  User.save(req.body, function(results) {
    return res.send(results.dataValues).status(201);
  });
};
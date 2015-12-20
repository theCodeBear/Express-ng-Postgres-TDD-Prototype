'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');


module.exports = function(req, res) {
  console.log(req.body);
  User.save(req.body, function(results) {
    return res.send(results.dataValues).status(201);
  });
};
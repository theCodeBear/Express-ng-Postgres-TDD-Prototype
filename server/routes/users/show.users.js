'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');

// returns the record for one user
module.exports = function(req, res) {
  models.User.findOne({ where: {name: req.params.name}}).then(function(user) {
    return res.send(user);
  }).catch(function(err) {
    console.log('ERROR IN SHOW ROUTE', err);
    return res.send(err).status(500);
  });
};
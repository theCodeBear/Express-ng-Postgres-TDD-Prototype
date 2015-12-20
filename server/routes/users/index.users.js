'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');


module.exports = function(req, res) {
  User.index(function(err, records) {
    if (err) return res.send(err).status(500);
    return res.status(200).send(records);
  });
};
'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');


// returns the record that was updated
module.exports = function(req, res) {
  models.User.update({
    name: req.body.name
  }, {
    where: { name: req.params.name },
    returning: true
  }).then(function(results) {
    return res.send(results[1][0].dataValues);
  });
};
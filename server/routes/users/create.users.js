'use strict';

var models = require('./../../../models');

module.exports = function(req, res) {
  console.log(req.body);
  models.User.create({
    name: req.body.name
  }).then(function() {
    return res.end();
  });
};
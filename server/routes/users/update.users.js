'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');


module.exports = function(req, res) {
  models.User.update({name: req.body.name}, { where: { name: req.params.name}})
  .then(function() {
    return res.send();
  });
};
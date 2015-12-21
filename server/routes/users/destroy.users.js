'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');

// deletes one user from the database, returns the number of rows affected
module.exports = function(req, res) {
  models.User.destroy({ where: { name: req.params.name}})
  .then(function(numDeleted) {
    return res.send({deleted: numDeleted});
  });
};
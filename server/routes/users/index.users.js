'use strict';

var models = require('./../../../models');
var User = require('./../../models/user.model');

// returns array of all users' names in database
exports.index = function(req, res) {
  User.index(function(err, records) {
    if (err) return res.send(err).status(500);
    return res.send(records);
  });
};


// returns object of newly saved user
exports.create = function(req, res) {
  User.save(req.body, function(results) {
    return res.send(results.dataValues).status(201);
  });
};


// deletes one user from the database, returns the number of rows affected
exports.destroy = function(req, res) {
  models.User.destroy({ where: { name: req.params.name}})
  .then(function(numDeleted) {
    return res.send({deleted: numDeleted});
  });
};


// returns the record for one user
exports.show = function(req, res) {
  models.User.findOne({ where: {name: req.params.name}}).then(function(user) {
    return res.send(user);
  }).catch(function(err) {
    console.log('ERROR IN SHOW ROUTE', err);
    return res.send(err).status(500);
  });
};


// returns the record that was updated
exports.update = function(req, res) {
  models.User.update({
    name: req.body.name
  }, {
    where: { name: req.params.name },
    returning: true
  }).then(function(results) {
    return res.send(results[1][0].dataValues);
  });
};
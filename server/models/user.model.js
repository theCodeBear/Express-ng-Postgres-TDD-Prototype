'use strict';

var models = require('./../../models');

// creates user in database, returns object of newly saved user
exports.save = function(user, cb) {
  models.User.create({
    name: user.name
  }).then(cb);
};

// returns array of users' names
exports.index = function(cb) {
  models.User.findAll().then(function(results) {
    var records = [];
    results.forEach(function(record) {
      records.push(record.dataValues.name);
    });
    cb(null, records);
  });
};
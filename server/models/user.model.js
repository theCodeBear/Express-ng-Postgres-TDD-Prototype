'use strict';

var models = require('./../../models');


exports.save = function(user, cb) {
  models.User.create({
    name: user.name
  }).then(cb);
};


exports.index = function(cb) {
  models.User.findAll().then(function(results) {
    var records = [];
    results.forEach(function(record) {
      records.push(record.dataValues.name);
    });
    cb(null, records);
  });
};
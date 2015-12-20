'use strict';

var models = require('./../../../models');


module.exports = function(req, res) {
  models.User.findAll().then(function(results) {
    var name = results[0].dataValues.name;
    console.log(name);
    res.status(200).send(name);
  });
};
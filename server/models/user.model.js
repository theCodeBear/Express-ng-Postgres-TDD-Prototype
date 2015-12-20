'use strict';

var sequelize = require('sequelize');

var User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    field: 'name'
  }
}, {
  freezeTableName: true
});

// this syncs the model with the database, force: true means it
// will drop and recreate the database each time the application is
// started, which is obviously no good for development or production
// but is good for integration testing.
User.sync({force: true}).then(function() {
  // table created
  return User.create({
    name:
  })
});
'use strict';

var mw = require('./middleware');

module.exports = function(router) {
// users
  router.get('/users', require('../routes/users/index.users'));
  router.post('/users', require('../routes/users/create.users'));
};
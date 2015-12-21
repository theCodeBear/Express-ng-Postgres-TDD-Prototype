'use strict';

var mw = require('./middleware');

module.exports = function(router) {
// users
  router.get('/users', require('../routes/users/index.users'));
  router.get('/users/:name', require('../routes/users/show.users'));
  router.post('/users', require('../routes/users/create.users'));
  router.put('/users/:name', require('../routes/users/update.users'));
  router.delete('/users/:name', require('../routes/users/destroy.users'));
};
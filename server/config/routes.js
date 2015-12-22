'use strict';

var mw = require('./middleware');

module.exports = function(router) {
// users
  router.get('/users', require('../routes/users/index.users').index);
  router.get('/users/:name', require('../routes/users/index.users').show);
  router.post('/users', require('../routes/users/index.users').create);
  router.put('/users/:name', require('../routes/users/index.users').update);
  router.delete('/users/:name', require('../routes/users/index.users').destroy);
};
'use strict';

angular.module('pean')

.factory('User', User);



User.$inject = ['$http'];

function User($http) {

  var service = {
    create: create
  };

  return service;


  function create(user) {
    return $http.post('/users', user);
  }

}
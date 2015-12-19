'use strict';

angular.module('pean')

.factory('User', User);



User.$inject = ['$http'];

function User($http) {

  var service = {
    create: create
  };

  return serivce;


  function create(user) {
    return $http.post('/users', user);
  }

}
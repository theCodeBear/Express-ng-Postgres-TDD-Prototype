'use strict';

angular.module('pean')

.controller('UserCtrl', UserCtrl);


UserCtrl.$inject = ['User', '$http'];

function UserCtrl(User, $http) {

  let vmUser = this;


  vmUser.createUser = createUser;


$http.get('/users').then(function(response) {
  console.log('resp', response.data)
  vmUser.data = response.data;
})


  function createUser(user) {
    console.log(user);
    User.create(user).then(function(response) {
      console.log(response.data);
    }).catch(function(error) {
      console.log('ERROR', error.data);
    });
  }

}
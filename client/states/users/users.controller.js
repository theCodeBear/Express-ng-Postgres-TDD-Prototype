'use strict';

angular.module('pean')

.controller('UserCtrl', UserCtrl);


UserCtrl.$inject = ['User', '$http'];

function UserCtrl(User, $http) {

  let vmUser = this;


  vmUser.createUser = createUser;
  vmUser.showUser = showUser;
  vmUser.deleteUser = deleteUser;
  vmUser.updateUser = updateUser;

  $http.get('/users').then(function(response) {
    vmUser.data = response.data;
  });



  function createUser(user) {
    User.create(user).then(function(response) {
      vmUser.data = response.data;
    }).catch(function(error) {
      console.log('ERROR', error.data);
    });
  }

  function showUser(user) {
    $http.get('/users/'+user.name).then(function(response) {
      vmUser.showOne = response.data;
    }).catch(function(err) {
      console.log('ERROR FINDING', err);
    });
  }

  function deleteUser(user) {
    $http.delete('/users/'+user.name).then(function(response) {
      vmUser.deleted = response.data;
    });
  }

  function updateUser(user) {
    $http.put('/users/'+user.currentName, {name : user.newName});
  }

}
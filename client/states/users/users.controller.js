'use strict';

angular.module('pean')

.controller('UserCtrl', UserCtrl);


UserCtrl.$inject = ['User'];

function UserCtrl(User) {

  let vmUser = this;


  vmUser.createUser = createUser;





  function createUser(user) {
    console.log(user);
    User.create(user).then(function(response) {
      console.log(response.data);
    }).catch(function(error) {
      console.log('ERROR', error.data);
    });
  }

}
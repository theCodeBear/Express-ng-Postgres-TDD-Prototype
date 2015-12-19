'use strict';

angular.module('pean')

.controller('UserCtrl', UserCtrl);


UserCtrl.$inject = [];

function UserCtrl() {

  let vmUser = this;

  vmUser.createUser = createUser;





  function createUser(user) {
    console.log(user);
  }

}
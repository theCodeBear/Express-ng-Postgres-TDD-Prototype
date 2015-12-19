'use strict';

angular.module('pean', ['ui.router', 'ngFileUpload'])

.config(config);



config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'states/home/home.html'
  })

  .state('users', {
    url: '/users',
    templateUrl: 'states/users/users.html',
    controller: 'UserCtrl as vmUser'
  })


  $urlRouterProvider.otherwise('/');

}
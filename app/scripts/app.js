'use strict';

/**
 * @ngdoc overview
 * @name knitcalcApp
 * @description
 * # knitcalcApp
 *
 * Main module of the application.
 */
angular
  .module('knitcalcApp', [
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

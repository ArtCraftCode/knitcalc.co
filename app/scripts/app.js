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
      .when('/increase', {
        templateUrl: 'views/increase.html',
        controller: 'IncreaseCtrl'
      })
      .when('/decrease', {
        templateUrl: 'views/decrease.html',
        controller: 'DecreaseCtrl'
      })
      .when('/converterYardsToOunces', {
        templateUrl: 'views/converter-yards-to-ounces.html',
        controller: 'ConverterYardsToOuncesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

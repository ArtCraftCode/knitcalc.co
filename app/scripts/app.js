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
      .when('/convert/yards-to-meters', {
        templateUrl: 'views/converter-yards-to-meters.html',
        controller: 'ConverterYardsToMetersCtrl'
      })
      .when('/convert/meters-to-yards', {
        templateUrl: 'views/converter-meters-to-yards.html',
        controller: 'ConverterMetersToYardsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

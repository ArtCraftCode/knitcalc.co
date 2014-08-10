'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:HatgeneratorCtrl
 * @description
 * # HatgeneratorCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('HatGeneratorCtrl', function ($scope) {
    $scope.title = 'Hat Pattern Generator';
    $scope.icon = 'glyphicon-cog';
    $scope.results = false;

    $scope.generate = function() {
      $scope.results = true;
    };
  });

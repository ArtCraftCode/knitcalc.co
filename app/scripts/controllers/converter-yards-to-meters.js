'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:ConverterYardsToMetersCtrl
 * @description
 * # ConverterYardsToMetersCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('ConverterYardsToMetersCtrl', function ($scope) {
    $scope.title = 'Convert Yards to Meters';
    $scope.icon = 'glyphicon-arrow-right';

    $scope.yards = null;
    $scope.meters = null;
    $scope.results = false;

    function calculateMeters() {
      $scope.float = Number($scope.yards / 1.0936).toFixed(2);
      $scope.meters = Math.floor($scope.float);
      $scope.results = true;
      $scope.results.yToM = true;
    }

    $scope.calculateMeters = calculateMeters;
  });

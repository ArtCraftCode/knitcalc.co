'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:ConvertermeterstoyardsCtrl
 * @description
 * # ConvertermeterstoyardsCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('ConverterMetersToYardsCtrl', function ($scope) {
    $scope.title = 'Convert Meters to Yards';

    $scope.yards = null;
    $scope.meters = null;
    $scope.results = false;

    function calculateYards() {
      $scope.float = Number($scope.meters * 1.0936).toFixed(2);
      $scope.yards = Math.floor($scope.float);
      $scope.results = true;
    }

    $scope.calculateYards = calculateYards;
  });

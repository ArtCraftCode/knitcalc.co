'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:HatCrownDecreasesCtrl
 * @description
 * # HatCrownDecreasesCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('HatCrownDecreasesCtrl', function ($scope, hatCalculator) {
    $scope.title = 'Hat Crown Decreases';
    $scope.results = false;

    $scope.stitches = 0;
    $scope.pattern = {};

    $scope.generate = function() {
      $scope.results = true;
      $scope.pattern.castOn = $scope.stitches;
      hatCalculator.manyMultiples($scope);
      hatCalculator.crownDecreases($scope);
    };
  });

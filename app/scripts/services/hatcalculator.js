'use strict';

/**
 * @ngdoc service
 * @name knitcalcApp.hatCalculator
 * @description
 * # hatCalculator
 * Factory in the knitcalcApp.
 */
angular.module('knitcalcApp')
  .factory('hatCalculator', function () {
    return {
      slope: function ($scope) {
        if ($scope.size === 13) {
          $scope.pattern.slope = 6;
        } else if ($scope.size === 15) {
          $scope.pattern.slope = 8.5;
        } else if ($scope.size >= 21) {
          $scope.pattern.slope = 14.5;
        } else {
          $scope.pattern.slope = 18;
        }
      }
    };
  });

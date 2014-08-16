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
      },

      slouch: function($scope) {
        var raw = $scope.pattern.castOn * 1.25;
        $scope.pattern.slouch = Math.floor(raw + $scope.pattern.multiple - (raw % $scope.pattern.multiple));
        $scope.pattern.slouchDecrease = ($scope.pattern.slouch / $scope.pattern.numDecreases) - 1;
      },

      beanie: function($scope) {
        var raw = $scope.pattern.castOn * 0.90;
        $scope.pattern.beanie = Math.floor(raw + $scope.pattern.multiple - (raw % $scope.pattern.multiple));
        $scope.pattern.beanieDecrease = ($scope.pattern.beanie / $scope.pattern.numDecreases) - 2;
      }
    };
  });

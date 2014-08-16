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
      sizes: [
        { 'value': '13', label: 'Infant, 0-6 months (13 inches / 33 cm)' },
        { 'value': '15', label: 'Toddler, 6-18 months (15 inches / 38 cm)' },
        { 'value': '17', label: 'Child\'s small (17 inches / 43 cm)' },
        { 'value': '20', label: 'Child\'s medium (20 inches / 51 cm)' },
        { 'value': '21', label: 'Child\'s large or Women\'s small (21 inches / 53 cm)' },
        { 'value': '22', label: 'Women\'s medium or Men\'s small (22 inches / 56 cm)' },
        { 'value': '23', label: 'Women\'s large or Men\'s medium (23 inches / 58 cm)' },
        { 'value': '25', label: 'Men\'s large (25 inches / 63.5 cm)' }
      ],

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
      },

      multiples: function($scope) {
        var raw = Math.floor($scope.size * $scope.stitchGauge);
        var round8 = raw + 8 - (raw % 8);
        var round9 = raw + 9 - (raw % 9);
        var min = Math.min(round8, round9);

        if (min % 8 === 0) {
          $scope.pattern.castOn = min;
          $scope.pattern.multiple = 8;
          $scope.pattern.numDecreases = 8;
        } else if (min % 9 === 0) {
          $scope.pattern.castOn = min;
          $scope.pattern.multiple = 9;
          $scope.pattern.numDecreases = 9;
        }
      },

      squareInches: function($scope) {
        var one = 3.142 * $scope.pattern.radius * $scope.pattern.slope;
        var two = 3.142 * $scope.pattern.radius * $scope.pattern.radius;
        $scope.pattern.squareInches = one + two;
      }
    };
  });

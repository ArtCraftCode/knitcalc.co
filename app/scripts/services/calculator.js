'use strict';

/**
 * @ngdoc service
 * @name knitcalcApp.calculator
 * @description
 * # calculator
 * Factory in the knitcalcApp.
 */
angular.module('knitcalcApp')
  .factory('calculator', function calculator() {
    return {
      difference: function ($scope) {
        var dec = $scope.sts.starting - $scope.sts.ending;
        var inc = $scope.sts.ending - $scope.sts.starting;
        if (dec < 0) {
          $scope.results.difference = inc;
        } else {
          $scope.results.difference = dec;
        }
      },

      remainder: function($scope) {
        var num = $scope.sts.starting / $scope.results.difference;
        if (num % 2 === 0) {
          $scope.results.remainderTimes = 0;
        } else {
          $scope.results.remainderTimes = $scope.sts.starting % $scope.results.difference;
        }
      },

      fancyMath: function($scope, type) {
        if (type === 'decrease') {
          $scope.results.multiSts = (Math.floor($scope.sts.starting / $scope.results.difference)) - 1;
          $scope.results.remainderSts = $scope.results.multiSts;
        }

        if (type === 'increase') {
          $scope.results.multiSts = Math.floor($scope.sts.starting / $scope.results.difference);
          $scope.results.remainderSts = $scope.results.multiSts + 1;
        }

        $scope.results.multiTimes = $scope.results.difference - $scope.results.remainderTimes;
      },

      gauge: function($scope) {
        $scope.pattern.rowGauge = $scope.rowGauge;
        $scope.pattern.stitchGauge = $scope.stitchGauge;
        $scope.pattern.rowGauge4 = $scope.rowGauge * 4;
        $scope.pattern.stitchGauge4 = $scope.stitchGauge * 4;
      },

      radius: function($scope) {
        $scope.pattern.radius = $scope.size/(2*3.142);
      }
    };
  });

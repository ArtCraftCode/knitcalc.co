'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:simpleCalculator
 * @description
 * # simpleCalculator
 */
angular.module('knitcalcApp')
  .directive('simpleCalculator', function () {
    return {
      templateUrl: './views/directives/simple-calculator.html',
      restrict: 'E'
    };
  });

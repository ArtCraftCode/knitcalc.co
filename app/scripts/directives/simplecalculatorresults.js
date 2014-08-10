'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:simpleCalculatorResults
 * @description
 * # simpleCalculatorResults
 */
angular.module('knitcalcApp')
  .directive('simpleCalculatorResults', function () {
    return {
      templateUrl: './views/directives/simple-calculator-results.html',
      restrict: 'E'
    };
  });

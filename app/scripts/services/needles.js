'use strict';

/**
 * @ngdoc service
 * @name knitcalcApp.needles
 * @description
 * # needles
 * Factory in the knitcalcApp.
 */
angular.module('knitcalcApp')
  .factory('needles', function () {
    return {
      list: [
        { 'value': '2.0', 'label': 'US 0 (2.0 mm)' },
        { 'value': '2.25', 'label': 'US 1 (2.25 mm)' },
        { 'value': '2.5', 'label': 'US 1 1/2 (2.5 mm)' },
        { 'value': '2.75', 'label': 'US 2 (2.75 mm)' },
        { 'value': '3.0', 'label': 'US 2 1/2 (3.0 mm)' },
        { 'value': '3.25', 'label': 'US 3 (3.25 mm)' },
        { 'value': '3.5', 'label': 'US 4 (3.5 mm)' },
        { 'value': '3.75', 'label': 'US 5 (3.75 mm)' },
        { 'value': '4.0', 'label': 'US 6 (4.0 mm)' },
        { 'value': '4.5', 'label': 'US 7 (4.5 mm)' },
        { 'value': '5.0', 'label': 'US 8 (5.0 mm)' },
        { 'value': '5.5', 'label': 'US 9 (5.5 mm)' },
        { 'value': '6.0', 'label': 'US 10 (6.0 mm)' },
        { 'value': '6.5', 'label': 'US 10 1/2 (6.5 mm)' },
        { 'value': '7', 'label': '7 mm' },
        { 'value': '8.0', 'label': 'US 11 (8.0 mm)' },
        { 'value': '9.0', 'label': 'US 13 (9.0 mm)' },
        { 'value': '10', 'label': 'US 15 (10.0 mm)' }
      ],

      setNeedles: function($scope) {
        $scope.needles.forEach(function(el, index, arr) {
          if ($scope.needle === el.value) {
            $scope.pattern.needle = el.label;

            if (index > 0) {
              $scope.pattern.smallerNeedle = arr[index-1].label;
            } else {
              $scope.pattern.smallerNeedle = el.label;
            }
          }
        });
      }
    };
  });

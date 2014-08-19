'use strict';

/**
 * @ngdoc service
 * @name knitcalcApp.yarns
 * @description
 * # yarns
 * Factory in the knitcalcApp.
 */
angular.module('knitcalcApp')
  .factory('yarns', function () {
    return {
      list: [
        { 'factor': 1.6, 'label' : 'Lace' },
        { 'factor': 1.4, 'label' : 'Light Fingering' },
        { 'factor': 1.3, 'label' : 'Fingering' },
        { 'factor': 1.2, 'label' : 'Sport' },
        { 'factor': 1.1, 'label' : 'DK' },
        { 'factor': 1, 'label' : 'Worsted' },
        { 'factor': 0.9, 'label' : 'Aran' },
        { 'factor': 0.7, 'label' : 'Bulky' },
        { 'factor': 0.4, 'label' : 'Super Bulky' }
      ],

      yardageFactor: function($scope) {
        $scope.yarnWeights.forEach(function(el) {
          if ($scope.yarn === el.label) {
            $scope.pattern.yardageFactor = el.factor;
          }
        });
      }
    };
  });

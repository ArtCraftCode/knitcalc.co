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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

'use strict';

/**
 * @ngdoc service
 * @name knitcalcApp.sockCalculator
 * @description
 * # sockCalculator
 * Factory in the knitcalcApp.
 */
angular.module('knitcalcApp')
  .factory('sockCalculator', function () {
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

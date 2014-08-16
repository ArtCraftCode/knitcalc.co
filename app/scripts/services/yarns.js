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

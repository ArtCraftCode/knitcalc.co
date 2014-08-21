'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:primeNumber
 * @description
 * # primeNumber
 */
angular.module('knitcalcApp')
  .directive('primeNumber', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the primeNumber directive');
      }
    };
  });

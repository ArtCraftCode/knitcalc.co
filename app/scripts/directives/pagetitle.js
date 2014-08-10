'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:pageTitle
 * @description
 * # pageTitle
 */
angular.module('knitcalcApp')
  .directive('pageTitle', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pageTitle directive');
      }
    };
  });

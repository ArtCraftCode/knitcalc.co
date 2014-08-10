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
      restrict: 'E',
      templateUrl: './views/directives/page-header.html'
    };
  });

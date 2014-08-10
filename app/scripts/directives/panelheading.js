'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:panelHeading
 * @description
 * # panelHeading
 */
angular.module('knitcalcApp')
  .directive('panelHeading', function () {
    return {
      templateUrl: './views/directives/panel-heading.html',
      restrict: 'C'
    };
  });

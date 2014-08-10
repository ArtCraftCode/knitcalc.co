'use strict';

/**
 * @ngdoc directive
 * @name knitcalcApp.directive:viewIncreaseDecrease
 * @description
 * # viewIncreaseDecrease
 */
angular.module('knitcalcApp')
  .directive('viewIncreaseDecrease', function () {
    return {
      templateUrl: './views/directives/view-increase-decrease.html',
      restrict: 'E',
      controller: function($scope) {
        var sts = {};
        sts.starting = null;
        sts.ending = null;
        $scope.sts = sts;

        var results = {};
        results.tooLarge = null;
        results.tooSmall = null;
        results.visible = null;
        $scope.results = results;
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:AbbreviationsCtrl
 * @description
 * # AbbreviationsCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('AbbreviationsCtrl', function ($scope) {
    $scope.title = 'Legend of Abbreviations';

    $scope.abbreviations = [
      { 'stitch': 'k', 'definition': 'knit' },
      { 'stitch': 'p', 'definition': 'purl' },
      { 'stitch': 'm1', 'definition': 'make one left' },
      { 'stitch': 'k2tog', 'definition': 'knit two together' },
      { 'stitch': 'ssk', 'definition': 'slip, slip, knit both slipped stitches together' }];
  });

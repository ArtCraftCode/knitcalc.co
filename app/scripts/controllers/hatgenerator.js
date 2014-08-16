'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:HatgeneratorCtrl
 * @description
 * # HatgeneratorCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('HatGeneratorCtrl', function ($scope, calculator, hatCalculator, needles, yarns) {
    $scope.title = 'Hat Pattern Generator';
    $scope.results = false;

    // ng-model
    $scope.needle = '';
    $scope.size = '';
    $scope.yarn = '';
    $scope.rowGauge = 0;
    $scope.stitchGauge = 0;
    $scope.pattern = {};

    $scope.needles = needles.list;
    $scope.yarnWeights = yarns.list;

    $scope.sizes = [
      { 'value': '13', label: 'Infant, 0-6 months (13 inches / 33 cm)' },
      { 'value': '15', label: 'Toddler, 6-18 months (15 inches / 38 cm)' },
      { 'value': '17', label: 'Child\'s small (17 inches / 43 cm)' },
      { 'value': '20', label: 'Child\'s medium (20 inches / 51 cm)' },
      { 'value': '21', label: 'Child\'s large or Women\'s small (21 inches / 53 cm)' },
      { 'value': '22', label: 'Women\'s medium or Men\'s small (22 inches / 56 cm)' },
      { 'value': '23', label: 'Women\'s large or Men\'s medium (23 inches / 58 cm)' },
      { 'value': '25', label: 'Men\'s large (25 inches / 63.5 cm)' }
    ];

    $scope.generate = function() {
      $scope.results = true;
      $scope.pattern.ease = Math.floor($scope.size * 0.85);

      calculator.gauge($scope);
      calculator.radius($scope);
      hatCalculator.slope($scope);
      hatCalculator.squareInches($scope);
      yarns.yardageFactor($scope);
      calculator.estimateYardage($scope);
      hatCalculator.multiples($scope);
      needles.setNeedles($scope);
      hatCalculator.slouch($scope);
      hatCalculator.beanie($scope);
      generateText();
    };

    function generateText() {
      if ($scope.pattern.multiple === 8) {
        $scope.pattern.ribbing = '1x1 or 2x2 (k1, p1 or k2, p2)';
      } else {
        $scope.pattern.ribbing = '3x3 (k3, p3)';
      }

      var ribbing, body;

      if ($scope.size === 13) {
        ribbing = Math.floor($scope.pattern.rowGauge);
        body = Math.floor($scope.pattern.rowGauge * 2.5);
        $scope.pattern.ribbingRows = '1 inch (' + ribbing + ' rows)';
        $scope.pattern.bodyHeight = '2.5 inches (' + body + ' rows )';
      } else if ($scope.size === 15) {
        ribbing = Math.floor($scope.pattern.rowGauge * 1.5);
        body = Math.floor($scope.pattern.rowGauge * 4);
        $scope.pattern.ribbingRows = '1.5 inches (' + ribbing + ' rows)';
        $scope.pattern.bodyHeight = '4 inches (' + body + ' rows)';
      } else if ($scope.size >= 21) {
        ribbing = Math.floor($scope.pattern.rowGauge * 1.5);
        body = Math.floor($scope.pattern.rowGauge * 5);
        $scope.pattern.ribbingRows = '1.5 inches (' + ribbing + ' rows)';
        $scope.pattern.bodyHeight = '5 inches (' + body + ' rows)';
      } else {
        ribbing = Math.floor($scope.pattern.rowGauge * 2);
        body = Math.floor($scope.pattern.rowGauge * 6.5);
        $scope.pattern.ribbingRows = '2 inches (' + ribbing + ' rows)';
        $scope.pattern.bodyHeight = '6.5 inches (' + body + ' rows)';
      }
    }
  });

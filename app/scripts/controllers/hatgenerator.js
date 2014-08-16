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
    $scope.sizes = hatCalculator.sizes;

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

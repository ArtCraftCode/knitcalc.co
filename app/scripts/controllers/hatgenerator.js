'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:HatgeneratorCtrl
 * @description
 * # HatgeneratorCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('HatGeneratorCtrl', function ($scope, calculator) {
    $scope.title = 'Hat Pattern Generator';
    $scope.icon = 'glyphicon-cog';
    $scope.results = false;

    // ng-model
    $scope.needle = '';
    $scope.size = '';
    $scope.yarn = '';
    $scope.rowGauge = 0;
    $scope.stitchGauge = 0;
    $scope.pattern = {};

    $scope.needles = [
      { 'value': '2.0', 'label': 'US 0 (2.0 mm)' },
      { 'value': '2.25', 'label': 'US 1 (2.25 mm)' },
      { 'value': '2.5', 'label': 'US 1 1/2 (2.5 mm)' },
      { 'value': '2.75', 'label': 'US 2 (2.75 mm)' },
      { 'value': '3.0', 'label': 'US 2 1/2 (3.0 mm)' },
      { 'value': '3.25', 'label': 'US 3 (3.25 mm)' },
      { 'value': '3.5', 'label': 'US 4 (3.5 mm)' },
      { 'value': '3.75', 'label': 'US 5 (3.75 mm)' },
      { 'value': '4.0', 'label': 'US 6 (4.0 mm)' },
      { 'value': '4.5', 'label': 'US 7 (4.5 mm)' },
      { 'value': '5.0', 'label': 'US 8 (5.0 mm)' },
      { 'value': '5.5', 'label': 'US 9 (5.5 mm)' },
      { 'value': '6.0', 'label': 'US 10 (6.0 mm)' },
      { 'value': '6.5', 'label': 'US 10 1/2 (6.5 mm)' },
      { 'value': '7', 'label': '7 mm' },
      { 'value': '8.0', 'label': 'US 11 (8.0 mm)' },
      { 'value': '9.0', 'label': 'US 13 (9.0 mm)' },
      { 'value': '10', 'label': 'US 15 (10.0 mm)' }
    ];

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

    $scope.yarnWeights = [
      { 'factor': 1.6, 'label' : 'Lace' },
      { 'factor': 1.4, 'label' : 'Light Fingering' },
      { 'factor': 1.3, 'label' : 'Fingering' },
      { 'factor': 1.2, 'label' : 'Sport' },
      { 'factor': 1.1, 'label' : 'DK' },
      { 'factor': 1, 'label' : 'Worsted' },
      { 'factor': 0.9, 'label' : 'Aran' },
      { 'factor': 0.7, 'label' : 'Bulky' },
      { 'factor': 0.4, 'label' : 'Super Bulky' }
    ];

    $scope.generate = function() {
      $scope.results = true;
      $scope.pattern.ease = Math.floor($scope.size * 0.85);

      calculator.gauge($scope);
      calculator.radius($scope);
      slope();
      squareInches();
      yardageFactor();
      calculator.estimateYardage($scope);
      mutiples();
      generateText();
      setNeedles();
    };

    function slope() {
      if ($scope.size === 13) {
        $scope.pattern.slope = 6;
      } else if ($scope.size === 15) {
        $scope.pattern.slope = 8.5;
      } else if ($scope.size >= 21) {
        $scope.pattern.slope = 14.5;
      } else {
        $scope.pattern.slope = 18;
      }
    }

    function squareInches() {
      var one = 3.142 * $scope.pattern.radius * $scope.pattern.slope;
      var two = 3.142 * $scope.pattern.radius * $scope.pattern.radius;
      $scope.pattern.squareInches = one + two;
    }

    function yardageFactor() {
      $scope.yarnWeights.forEach(function(el) {
        if ($scope.yarn === el.label) {
          $scope.pattern.yardageFactor = el.factor;
        }
      });
    }

    function mutiples() {
      var raw = Math.floor($scope.size * $scope.stitchGauge);
      var round8 = raw + 8 - (raw % 8);
      var round9 = raw + 9 - (raw % 9);
      var min = Math.min(round8, round9);

      if (min % 8 === 0) {
        $scope.pattern.castOn = min;
        $scope.pattern.multiple = 8;
        $scope.pattern.numDecreases = 8;
      } else if (min % 9 === 0) {
        $scope.pattern.castOn = min;
        $scope.pattern.multiple = 9;
        $scope.pattern.numDecreases = 9;
      }
    }

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

    function setNeedles() {
      $scope.needles.forEach(function(el, index, arr) {
        if ($scope.needle === el.value) {
          $scope.pattern.needle = el.label;

          if (index > 0) {
            $scope.pattern.smallerNeedle = arr[index-1].label;
          } else {
            $scope.pattern.smallerNeedle = el.label;
          }
        }
      });
    }
  });

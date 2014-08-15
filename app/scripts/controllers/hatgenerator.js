'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:HatgeneratorCtrl
 * @description
 * # HatgeneratorCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('HatGeneratorCtrl', function ($scope) {
    $scope.title = 'Hat Pattern Generator';
    $scope.icon = 'glyphicon-cog';
    $scope.results = false;

    // ng-model
    $scope.needle = '';
    $scope.size = '';
    $scope.yarn = '';
    $scope.rowGauge = 0;
    $scope.stitchGauge = 0;

    // stored values
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

    $scope.generate = function() {
      $scope.results = true;
    };
  });

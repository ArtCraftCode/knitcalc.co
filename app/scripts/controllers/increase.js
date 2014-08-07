'use strict';

// /**
//  * @ngdoc function
//  * @name knitcalcApp.controller:IncreasesCtrl
//  * @description
//  * # IncreasesCtrl
//  * Controller of the knitcalcApp
//  */

angular.module('knitcalcApp')
  .controller('IncreaseCtrl', function ($scope) {
    var sts = {};
    sts.starting = null;
    sts.ending = null;
    $scope.sts = sts;

    var results = {};
    results.tooLarge = null;
    results.tooSmall = null;
    results.visible = null;
    $scope.results = results;

    var errors = {};
    errors.tooSmall = 'The starting number is bigger than your ending number!';
    errors.tooLarge = 'The difference is too large! Pick an ending number that is less than double the starting number.';
    $scope.errors = errors;

    function calculate() {
      $scope.results.difference = $scope.sts.ending - $scope.sts.starting;
      remainder();
      fancyMath();
      validate();
      unbalancedView();
    }

    $scope.calculate = calculate;

    function remainder() {
      var num = $scope.sts.starting / $scope.results.difference;
      if (num % 2 === 0) {
        $scope.results.remainderTimes = 0;
      } else {
        $scope.results.remainderTimes = $scope.sts.starting % $scope.results.difference;
      }
    }

    function fancyMath() {
      $scope.results.multiSts = Math.floor($scope.sts.starting / $scope.results.difference);
      $scope.results.multiTimes = $scope.results.difference - $scope.results.remainderTimes;
      $scope.results.remainderSts = $scope.results.multiSts + 1;
    }

    function validate() {
      $scope.results.tooSmall = false;
      $scope.results.tooLarge = false;
      if ($scope.results.difference >= $scope.sts.starting) {
        $scope.results.tooLarge = true;
      } else if ($scope.sts.ending <= $scope.sts.starting) {
        $scope.results.tooSmall = true;
      } else {
        $scope.results.visible = true;
      }
    }

    function unbalancedView() {
      var base = '(k' + $scope.results.multiSts + ', m1) ' + $scope.results.multiTimes + ' times';
      var ending = ' (' + $scope.sts.ending + ' sts total).';

      if ($scope.results.remainderTimes === 0) {
        $scope.results.unbalanced = base + ending;
      } else {
        $scope.results.unbalanced = base + ', (k' + $scope.results.remainderSts + ', m1) ' + $scope.results.remainderTimes + ' times' + ending;
      }
    }
  });

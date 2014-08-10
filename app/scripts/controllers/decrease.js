'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:DecreaseCtrl
 * @description
 * # DecreaseCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('DecreaseCtrl', function ($scope) {
    $scope.title = 'Decrease evenly across a row';
    $scope.icon = 'glyphicon-minus';
    $scope.formName = 'decreaseForm';

    var errors = {};
    errors.tooSmall = 'The starting number is too small!';
    errors.tooLarge = 'The difference is too large! Pick an starting number that is less than double the ending number.';
    $scope.errors = errors;

    function calculate() {
      difference();
      remainder();
      fancyMath();
      validate();
      unbalancedView();
    }

    $scope.calculate = calculate;

    function difference() {
      $scope.results.difference = $scope.sts.starting - $scope.sts.ending;
    }

    function remainder() {
      var num = $scope.sts.starting / $scope.results.difference;
      if (num % 2 === 0) {
        $scope.results.remainderTimes = 0;
      } else {
        $scope.results.remainderTimes = $scope.sts.starting % $scope.results.difference;
      }
    }

    function fancyMath() {
      $scope.results.multiSts = (Math.floor($scope.sts.starting / $scope.results.difference)) - 1;
      $scope.results.multiTimes = $scope.results.difference - $scope.results.remainderTimes;
      $scope.results.remainderSts = $scope.results.multiSts;
    }

    function validate() {
      $scope.results.tooSmall = false;
      $scope.results.tooLarge = false;
      if ($scope.results.difference >= $scope.sts.ending) {
        $scope.results.tooLarge = true;
      } else if ($scope.sts.ending >= $scope.sts.starting) {
        $scope.results.tooSmall = true;
      } else {
        $scope.results.visible = true;
      }
    }

    function unbalancedView() {
      var base = '(k' + ($scope.results.multiSts - 1) + ', k2tog) ' + $scope.results.multiTimes + ' times';
      var ending = ' (' + $scope.sts.ending + ' sts total).';

      if ($scope.results.remainderTimes === 0) {
        $scope.results.unbalanced = base + ending;
      } else {
        $scope.results.unbalanced = base + ', (k' + $scope.results.remainderSts + ', k2tog) ' + $scope.results.remainderTimes + ' times' + ending;
      }
    }
  });

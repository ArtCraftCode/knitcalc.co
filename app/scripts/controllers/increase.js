'use strict';

// /**
//  * @ngdoc function
//  * @name knitcalcApp.controller:IncreasesCtrl
//  * @description
//  * # IncreasesCtrl
//  * Controller of the knitcalcApp
//  */

angular.module('knitcalcApp')
  .controller('IncreaseCtrl', function ($scope, calculator) {
    $scope.title = 'Increase evenly across a row';
    $scope.formName = 'increaseForm';
    $scope.action = 'increase';

    var errors = {};
    errors.tooSmall = 'The starting number is bigger than your ending number!';
    errors.tooLarge = 'The difference is too large! Pick an ending number that is less than double the starting number.';
    $scope.errors = errors;

    function calculate() {
      calculator.difference($scope);
      calculator.remainder($scope);
      calculator.fancyMath($scope, 'increase');
      validate();
      unbalancedView();
    }

    $scope.calculate = calculate;

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

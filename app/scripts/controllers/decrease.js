'use strict';

/**
 * @ngdoc function
 * @name knitcalcApp.controller:DecreaseCtrl
 * @description
 * # DecreaseCtrl
 * Controller of the knitcalcApp
 */
angular.module('knitcalcApp')
  .controller('DecreaseCtrl', function ($scope, calculator) {
    $scope.title = 'Decrease evenly across a row';
    $scope.icon = 'glyphicon-minus';
    $scope.formName = 'decreaseForm';
    $scope.action = 'decrease';

    var errors = {};
    errors.tooSmall = 'The starting number is too small!';
    errors.tooLarge = 'The difference is too large! Pick an starting number that is less than double the ending number.';
    $scope.errors = errors;

    function calculate() {
      calculator.difference($scope);
      calculator.remainder($scope);
      calculator.fancyMath($scope, 'decrease');
      validate();
      unbalancedView();
    }

    $scope.calculate = calculate;

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

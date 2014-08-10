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
    errors.tooSmall = 'The starting number is too small!';
    errors.tooLarge = 'The difference is too large! Pick an starting number that is less than double the ending number.';
    $scope.errors = errors;
  });

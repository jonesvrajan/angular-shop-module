'use strict';

/**
 * @ngdoc function
 * @name angularShoppingModuleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularShoppingModuleApp
 */
angular.module('angularShoppingModuleApp')
  .directive('productList', [function() {
	 return {
	 templateUrl: 'directives/product-list-page.html',
	 restrict: 'AE',
	 };
 }]);

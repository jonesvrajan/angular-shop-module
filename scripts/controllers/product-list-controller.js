'use strict';

/**
 * @ngdoc function
 * @name angularShoppingModuleApp.controller:productListController
 * @description
 * # productListController
 * Controller of the angularShoppingModuleApp
 */
angular.module('angularShoppingModuleApp')
  .controller('productListController', ['$http', function($http) {
  	var self = this;
  	self.productlist = [];
  	self.quantity = 1;
	$http.get('scripts/cart.json').then(function(response) {
		self.productlist = response.data.productsInCart;
		}, function(errResponse) {
		console.error('Error while fetching products');
	});

  }]);

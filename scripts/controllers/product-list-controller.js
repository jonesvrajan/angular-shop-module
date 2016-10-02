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
  	self.grandtotal = 0;
  	self.productlist = [];
  	
	$http.get('scripts/cart.json').then(function(response) {
		self.productlist = response.data.productsInCart;
		}, function(errResponse) {
		console.error('Error while fetching products');
	});

	self.totals = [0];

	self.total = function(index) {
  		var totalprice = index.p_originalprice * index.p_quantity;
  		var grandtotals = self.grandtotal + totalprice;
  		self.totals.push(grandtotals);
 		return grandtotals;
    };

    self.grandtotale = function() {
    	if (self.totals.length > 0 ) {
			var grandtotaleno = self.totals.reduce(function (a, b) { return a + b; });
		};
		return grandtotaleno;
	}

  }]);

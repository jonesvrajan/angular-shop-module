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
		console.log(self.productlist);
		}, function(errResponse) {
		console.error('Error while fetching products');
	});

	self.addtoCart = function() {
        alert(self.productlist[0].p_quantity);
    }

	self.grandTotal = function() {
        var total = 0;
        angular.forEach(self.productlist[0], function(item) {
          total = self.productlist.p_originalprice * self.productlist.p_quantity;
        })

        return total;
    }

  }]);

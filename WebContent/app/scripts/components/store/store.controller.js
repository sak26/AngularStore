/**
 * 
 */

(function() {

	angular.module("store").controller("StoreController",['$state', function($state) {

		var ctrl = this;
		
		ctrl.auth = $state.current.data.auth;
		console.log('auth data: ',ctrl.auth);
		
		
	}]);

})();
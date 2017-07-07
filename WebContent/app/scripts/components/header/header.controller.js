/**
 * 
 */

(function() {

	angular.module("store").controller("HeaderController",
			[ 'authSrvc', '$state', function(authSrvc, $state) {

				var ctrl = this;

				ctrl.logout = function() {
					authSrvc.logout();
					$state.go('store.unauthenticated.login');
				}
			} ]);

})();
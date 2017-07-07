/**
 * 
 */

(function() {

	angular.module("store").controller("RegisterController",
			[ '$state', 'authSrvc', function($state, authSrvc) {

				console.log('register controller registered');
				var ctrl = this;

				ctrl.user = {};
				ctrl.success = {};
				ctrl.error = {};

				ctrl.switchToLogin = function() {
					$state.go('store.unauthenticated.login');
				}

				ctrl.submitForm = function() {
					authSrvc.register(ctrl.user).then(function(response) {
						console.log('register response: ', response);
						if(response.data != "-1") {
						ctrl.success.message = "Registerd successfully. Please login to go to Angular Store";
						} else {
							ctrl.error.message = "There is some problem in registration, please try again later";
						}
						
					}, function(error) {
						ctrl.error.message = "There is some problem in registration, please try again later";
						console.log('loginError: ', error);
					});
					
				}

			} ]);

})();
/**
 * 
 */

(function() {

	angular.module("store").controller("LoginController",
			[ '$state', 'authSrvc', function($state, authSrvc) {

				console.log('login controller registered');
				var ctrl = this;
				ctrl.user = {};
				ctrl.error = {};

				ctrl.switchToRegister = function() {
					$state.go('store.unauthenticated.register');
				}

				ctrl.submitForm = function() {
					// console.log('login user: ', ctrl.user);
					authSrvc.login(ctrl.user).then(function(response) {
						console.log('login response: ', response);

						if (response.data == "-1") {
							ctrl.error.message = "Invalid email or password";
						} else {

							var loggedInUser = {
								id : response.data,
								email : ctrl.user.email
							}
							authSrvc.setCurrentUser(loggedInUser);
							$state.go('store.authenticated.dashboard');
						}
					}, function(error) {
						console.log('loginError: ', error);
					});

				}
			} ]);

})();
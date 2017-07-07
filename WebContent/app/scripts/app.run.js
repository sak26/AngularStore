/**
 * 
 */

(function() {

	angular.module("store").run(['$rootScope','$localStorage','$state', '$transitions',
					function($rootScope, $localStorage, $state, $transitions) {
						console.log('run section');
						// $trace.enable('TRANSITION');

						$transitions.onStart({}, function($transition$) {
							if($transition$.$to().name != "store.unauthenticated.register" 
								&& $transition$.$to().name != "store.unauthenticated.login") {
							if ($localStorage.currUser == null ) {
								$state.go('store.unauthenticated.login')
							}
							}
						});
						
						
						

					} ]);

})();
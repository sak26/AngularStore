/**
 * 
 */

(function() {

	angular
			.module("store")
			.config(
					[
							'$stateProvider',
							'baseUrlProvider',
							'$httpProvider',
							function($stateProvider, baseUrlProvider,
									$httpProvider, $rootScope) {

								baseUrlProvider
										.setUrl("http://localhost:8081/angularstore/rest/");

								$stateProvider.state('store', {
									abstract : true,
									url : ""
								});

								$stateProvider.state('store.authenticated', {
									abstract : true,
									url : "",
									views : {
										'header@' : {
											template : '<header></header>'
										},
										'content@' : {
											template : '<store></store>'
										}
									}

								});

								$stateProvider.state('store.unauthenticated', {
									abstract : true,
									url : "",
									views : {
										'content@' : {
											template : '<store></store>'
										}
									}
								});

								$stateProvider.state(
										'store.unauthenticated.login', {
											url : '/login',
											template : '<login></login>',
											resolve : {},
											data : {
												auth : false
											}
										});

								$stateProvider.state(
										'store.unauthenticated.register', {
											url : '/register',
											template : '<register></register>',
											resolve : {},
											data : {
												auth : false
											}
										});

								$stateProvider
										.state(
												'store.authenticated.dashboard',
												{
													url : '/dashboard',
													template : '<dashboard></dashboard>',
													resolve : {},
													data : {
														auth : true
													}
												});



								$httpProvider.interceptors
										.push('myHttpInterceptor');

							} ]);

})();
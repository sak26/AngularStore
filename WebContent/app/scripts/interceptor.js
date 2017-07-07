/**
 * 
 */

(function() {

	angular.module("store").factory("myHttpInterceptor", function($q){
		
		return {
			'request' : function(config) {
				return config;
			},
			'requestError' : function(rejection){
				return $q.reject(rejection)
			},
			'response' : function(response){
				return response;
			},
			'responseError': function(rejection){
				return $q.reject(rejection);
			}
		}
		
	});

})();
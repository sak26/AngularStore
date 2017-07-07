/**
 * 
 */

(function() {

	angular.module("store").factory("urlRepo", [ 'baseUrl', function(baseUrl) {

		var _regUrl = baseUrl.baseUrl + "user/register";
		var _loginUrl = baseUrl.baseUrl + "user/login";

		return {
			regUrl : _regUrl,
			loginUrl : _loginUrl
		}

	} ]);

})();
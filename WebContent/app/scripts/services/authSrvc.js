/**
 * 
 */

(function() {

	angular.module("store").factory("authSrvc",
			[ 'urlRepo', '$http', '$q', '$localStorage', function(urlRepo, $http, $q, $localStorage) {

				var _currentUser = {};
				
				var _getCurrentUser = function(){
					return _currentUser;
				}
				
				var _setCurrentUser = function(user) {
					_currentUser = user;
					$localStorage.currUser = _currentUser;
					
				}
				
				var _register = function(user) {
					var deferred = $q.defer();
					$http.post(urlRepo.regUrl, user).then(function(response) {
						deferred.resolve(response);
					}, function(error) {
						deferred.reject(error);
					});
					
					return deferred.promise;
				}
				
				var _login = function(user) {
					var deferred = $q.defer();
					$http.post(urlRepo.loginUrl, user).then(function(response) {
						deferred.resolve(response);
					}, function(error) {
						deferred.reject(error);
					});
					
					return deferred.promise;
				}
				
				var _logout = function() {
					_currentUser = {};
					$localStorage.$reset();
				}

				return {
					register : _register,
					login : _login,
					logout : _logout,
					getCurrentUser : _getCurrentUser,
					setCurrentUser : _setCurrentUser
				}
			} ]);

})();
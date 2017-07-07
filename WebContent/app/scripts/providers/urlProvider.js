/**
 * 
 */

(function(){
	
	angular.module("store").provider("baseUrl", function(){
		
		var url = "";
		this.setUrl = function(u) {
			url = u;
		}
		
		this.$get = function() {
			return {
				baseUrl : url
			}
		}
		
	});
	
})();
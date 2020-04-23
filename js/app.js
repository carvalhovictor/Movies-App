angular.module("moviesApp", []);

angular.module("moviesApp").controller("registerCtrl", function($scope){
	$scope.app = "Movies";
	$scope.register = function(user){
		console.log(user);
	};
});
angular.module("moviesApp", []);

angular.module("moviesApp").controller("registerCtrl", function($scope, $http){
	$scope.app = "Movies";

	$scope.register = function(){
	var config = {
		method : 'POST',
		url : 'http://localhost:8888/movies/login.php',
		data : {
			'username' : $scope.user.email,
			'password' : $scope.user.password
		}
	};
	var request = $http(config);
	request.then(function(response){
		window.location.href = 'mymovies.html';
	},function(error){
		console.log(error.data);
	});
};
});
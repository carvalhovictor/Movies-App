angular.module("moviesApp").controller("registerCtrl", function($scope, $http, $location){

	$scope.register = function(){
		var config = {
			method : 'POST',
			url : 'php/register.php',
			data : {
				'username' : $scope.user.email,
				'alias' : $scope.user.alias,
				'password' : $scope.user.password
				
			}
		};
		var request = $http(config);
		request.then(function(response){
			$location.path("/search/"+$scope.user.email);
		},function(error){
			console.log(error.data);
		});
	};
});

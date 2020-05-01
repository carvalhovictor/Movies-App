angular.module("moviesApp").controller("registerCtrl", function($scope, $http, $location){

	$scope.register = function(){
		var config = {
			method : 'POST',
			url : 'php/register.php',
			data : {
				'email' : $scope.user.email,
				'password' : $scope.user.password
			}
		};
		var request = $http(config);
		request.then(function(response){
			console.log(response.data);
			if(response.data == 1){
				$location.path("/search");
			}else{
				$scope.msg = response.data;
			}
		},function(error){
			console.log(error.data);
		});
	};
});

angular.module("moviesApp").controller("loginCtrl", function($scope, $http, $location){
	$scope.msg = "";
	$scope.submit = function(){
		var config = {
			method : 'POST',
			crossDomain : true,
			url : 'php/login.php',
			data : {
				'username' : $scope.user.email,
				'password' : $scope.user.password
			}
		};
		var request = $http(config);
		request.then(function(response){
			if(response.data == 1){
				$location.path("/search/"+$scope.user.email);
			}else{
				$scope.msg = response.data;
			}	
		},function(error){
			console.log(error.data);
		});
	};
});
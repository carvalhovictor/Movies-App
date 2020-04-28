angular.module("moviesApp", []);

angular.module("moviesApp").controller("registerCtrl", function($scope, $http){
	$scope.app = "Movies";

	$scope.register = function(){
	var config = {
		method : 'POST',
		url : 'http://localhost:8888/movies/register.php',
		data : {
			'username' : $scope.user.email,
			'alias' : $scope.user.alias,
			'password' : $scope.user.password
			
		}
	};
	var request = $http(config);
	request.then(function(response){
		window.location.href = 'search.html';
	},function(error){
		console.log(error.data);
	});
};
});

angular.module("moviesApp").controller("loginCtrl", function($scope, $http){
	$scope.msg = "";
	$scope.submit = function(){
	var config = {
		method : 'POST',
		crossDomain : true,
		url : 'http://localhost:8888/movies/login.php',
		data : {
			'username' : $scope.user.email,
			'password' : $scope.user.password
		}
	};
	var request = $http(config);
	request.then(function(response){
		if(response.data == 1){
			window.location.href = 'search.html';
		}else{
			$scope.msg = response.data;
		}	
	},function(error){
		console.log(error.data);
	});
};
});

angular.module("moviesApp").controller("moviesCtrl", function($scope, $http){
	$scope.movie = [];
	$scope.flag = false;
	//$scope.user = '';

	$scope.loadMovie = function(title){
		$http.get('http://www.omdbapi.com/?t='+title+'&apikey=1ebdc3a0&plot=short').then(function(response){
			$scope.movie = response.data;
			$scope.flag = true;
			delete $scope.msg;
			if(response.data.Response == 'False'){
				$scope.flag = false;
				$scope.msg = response.data.Error
			}
			delete $scope.search;
		});
	};

	/*$http.get('http://localhost:8888/movies/getSession.php').then(function(response){
		console.log(response.data);
		$scope.user = response.data;
	});
	*/
});
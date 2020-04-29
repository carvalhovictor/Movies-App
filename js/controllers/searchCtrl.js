angular.module("moviesApp").controller("searchCtrl", function($scope, $http, $routeParams){
	$scope.movie = [];
	$scope.flag = false;
	$scope.user = $routeParams.user;
	
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
angular.module("moviesApp").controller("searchCtrl", function($scope, $http, $routeParams){
	$scope.movie = [];
	$scope.flag = false;
	$scope.user = $routeParams.user;
	
	$scope.loadMovie = function(title){
		$http.get('http://www.omdbapi.com/?t='+title+'&apikey=1ebdc3a0&plot=short').then(function(response){
			$scope.movie = response.data;
			$scope.flag = true;
			delete $scope.added;
			delete $scope.msg;
			if(response.data.Response == 'False'){
				$scope.flag = false;
				$scope.msg = response.data.Error
			}
			delete $scope.search;
		});
	};

	$scope.addFavorite = function(){
		var config = {
		method : 'POST',
		url : 'php/addFavorite.php',
		data : {
			'title' : $scope.movie.Title,
			'email' : $scope.user
			}
		};
		var request = $http(config);
		request.then(function(response){
			$scope.flag = false;
			$scope.added = "Movie added to favorites";
		},function(error){
			console.log(error.data);
		});
	}
});
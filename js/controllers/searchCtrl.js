angular.module("moviesApp").controller("searchCtrl", function($scope, $http, $location){
	$scope.flag = false;
	$scope.session = false;
	
	$http.get('php/getSession.php').then(function(response){
		if(response.data == 0){
			$location.path("/login");
		}else{
			$scope.session = true;
			$scope.user = response.data;
		}
	});

	$scope.loadMovie = function(title){
		$http.get('https://www.omdbapi.com/?t='+title+'&apikey=1ebdc3a0&plot=short').then(function(response){
			$scope.movie = response.data;
			$scope.flag = true;
			delete $scope.added;
			delete $scope.msg;
			if(response.data.Response === 'False'){
				$scope.flag = false;
				$scope.msg = response.data.Error
			}
			if(response.data.Poster === 'N/A'){
				$scope.movie.Poster = 'images/camera.png';
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

	$scope.logout = function(){
		$http.get('php/logout.php').then(function(response){
			$location.path("/login");
		});
	}
});
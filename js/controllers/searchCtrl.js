angular.module("moviesApp").controller("searchCtrl", function($scope, $http, $location, api){
	$scope.flag = false;
	$scope.session = false;
	
	//Function to check if user session is active, if not redirect to login page
	$http.get('php/getSession.php').then(function(response){
		if(response.data == 0){
			$location.path("/login");
		}else{
			$scope.session = true;
			$scope.user = response.data;
		}
	});

	//Function to load searched movie
	$scope.loadMovie = function(title){
		$http.get('https://www.omdbapi.com/?t='+ title +'&apikey='+ api.key +'&plot=short').then(function(response){
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

	//Function to add movie to favorites
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

	//Function to logout and destroy session
	$scope.logout = function(){
		$http.get('php/logout.php').then(function(response){
			$location.path("/login");
		});
	}
});
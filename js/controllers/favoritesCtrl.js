angular.module("moviesApp").controller("favoritesCtrl", function($scope, $http, $filter, $mdToast, $document, $location){
	$scope.session = false;

	$http.get('php/getSession.php').then(function(response){
		if(response.data == 0){
			$location.path("/login");
		}else{
			$scope.session = true;
			$scope.user = response.data;
			getFavorites();
		}
	});

	var getFavorites = function(){
		var config = {
		method : 'POST',
		url : 'php/getFavorites.php',
		data : {
			'user' : $scope.user
			}
		};
		var request = $http(config);
		request.then(function(response){
			console.log(response.data);
			$scope.movies = response.data;
		},function(error){
			console.log(error.data);
		});
	}
	$scope.orderby = function(field){
		$scope.movies = $filter('orderBy')($scope.movies, field, $scope.reverse);
		$scope.reverse = !$scope.reverse;
	};	

	$scope.remove = function(movie){
		var config = {
		method : 'POST',
		url : 'php/removeFavorite.php',
		data : {
			'id' : movie.id
			}
		};
		var request = $http(config);
		request.then(function(response){
			showRemoveToast();
			getFavorites();
		},function(error){
			console.log(error.data);
		});
	}

	var showRemoveToast = function() {
		$mdToast.show(
		  $mdToast.simple()
		    .textContent('Movie removed from favorites')
		    .position('top')
		    .hideDelay(1500)
		    .parent('form')
		);
	};
	
});
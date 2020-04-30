angular.module("moviesApp").controller("favoritesCtrl", function($scope, $http, $routeParams, $filter, $mdToast, $document){
	$scope.user = $routeParams.user;
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
	getFavorites();
});
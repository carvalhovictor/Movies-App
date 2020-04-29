angular.module("moviesApp").controller("favoritesCtrl", function($scope, $http, $routeParams){
	$scope.user = $routeParams.user;
});
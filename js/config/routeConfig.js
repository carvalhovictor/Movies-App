angular.module("moviesApp").config(function($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginCtrl" 
    });
    $routeProvider.when("/register", {
        templateUrl: "view/register.html",
        controller: "registerCtrl" 
    });
    $routeProvider.when("/search", {
        templateUrl: "view/search.html",
        controller: "searchCtrl" 
    });
    $routeProvider.when("/favorites", {
        templateUrl: "view/favorites.html",
        controller: "searchCtrl" 
    });

    $routeProvider.otherwise({redirectTo: "/login"});    
});
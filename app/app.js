 angular.module("app", ["lumx","ngRoute","ngResource"])
.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "MainController"
      })
      .when("/about", {
        templateUrl: "templates/about.html",
        controller: "AboutController"
      });
  }
);

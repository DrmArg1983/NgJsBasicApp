var app = angular.module("app", ["ngRoute"]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", {
        templateUrl: "templates/home.html",
        controller: "HomeController",
        controllerAs: "homeCtrl"
      })
      .when("/about", {
        templateUrl: "templates/about.html",
        controller: "AboutController",
        controllerAs: "AboutCtrl"
      });
  }
]);

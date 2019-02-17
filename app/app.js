var app = angular.module("app", ["ngRoute","lumx"]);

app.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
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
]);

 angular.module("app", ["lumx","ngRoute","ngResource"])
.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "templates/home.html",
        controller: "MainController"
      })
      .when("/post/:id", {
        templateUrl: "templates/post.html",
        controller: "PostController"
      });
  }
);

angular
  .module("app")
  .controller("MainController", function($scope,$resource, PostResource) {
    
    User = $resource("http://jsonplaceholder.typicode.com/users/:id", {
      id: "@id"
    });

    $scope.posts = PostResource.query(); //query returns [] by default
    $scope.users = User.query(); //query returns [] by default
    $scope.removePost = function(post) {
      PostResource.delete({ id: post.id }, function(data) {
        console.log(data);
      });
      //this is because API is Fake, Query should be uses in real API.
      $scope.posts = $scope.posts.filter(function(element) {
        return element.id !== post.id;
      });
    };
  })
  .controller("PostController", function($scope, PostResource, $routeParams,$location) {
    $scope.post = PostResource.get({ id: $routeParams.id });
    $scope.title = "Edit Post";

    $scope.savePost = function() {
      PostResource.update({id: $scope.post.id},{ data: $scope.post }, function(data) {
        console.log(data);
      });
      $location.path("/post/"+$scope.post.id);
  }})
  .controller("NewPostController", function($scope, PostResource,$location) {
    $scope.post = {};
    $scope.title = "Create Post";

    $scope.savePost = function() {
      PostResource.save({ data: $scope.post }, function(data) {
        console.log(data);
      });
      $location.path("/");
    };
  });

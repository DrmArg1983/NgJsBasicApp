angular
  .module("app")
  .controller("MainController", function($scope, $resource) {
    
    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {
      id: "@id"
    });

    User = $resource("http://jsonplaceholder.typicode.com/users/:id", {
      id: "@id"
    });

    $scope.posts = Post.query(); //query returns [] by default
    $scope.users = User.query(); //query returns [] by default
  })
  .controller("PostController", function($scope, $resource, $routeParams) {
    Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {
      id: "@id"
    });

    $scope.post= Post.get({id:$routeParams.id});
  })
  .controller("AboutController", function() {
    console.log("3. AboutController loaded!");
  });

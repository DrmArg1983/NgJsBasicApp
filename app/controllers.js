angular
  .module("app")
  .controller("MainController", function() {
    console.log("MainController  loaded!");
  })
  .controller("HomeController", function() {
    console.log("2. HomeController loaded!");
  })
  .controller("AboutController", function() {
    console.log("3. AboutController loaded!");
  });

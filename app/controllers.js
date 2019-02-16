angular
  .module("app")
  .controller("FirstController", function() {
    console.log("3. diego  loaded!");
  })
  .controller("HomeController", function() {
    console.log("2. HomeController loaded!");
  })
  .controller("AboutController", function() {
    console.log("3. AboutController loaded!");
  });

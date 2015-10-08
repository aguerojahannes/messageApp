angular.module("MessageApp", ['ui.router', "ngMaterial"]).config(function($stateProvider,
$urlRouterProvider){
  $stateProvider.state("Home", {
    url: "/",
    templateUrl: '/templates/read.html'
  })
$urlRouterProvider.otherwise("/");
});

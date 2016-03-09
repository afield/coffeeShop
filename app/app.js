var app = angular.module('shopApp',['ui.router']);
console.log('app.js works');

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('shops', {
      url: "/",
      templateUrl: "site/partials/main.html",
      controller: "ShopCtrl as ctrl"
    });

});



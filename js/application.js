'use strict';

// Routes list
window.Routes = {
  'showcase': {
    controller: 'Showcase',
    templateUrl: 'html/showcase.html'
  }
};

// Initialize the application module and configure dependencies
window.App = angular.module('app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

// Configure routes and hash prefix
window.App.config(function($locationProvider, $routeProvider){
  for(var i in window.Routes){ $routeProvider.when('/' + i, window.Routes[i]); }
  $routeProvider.otherwise({redirectTo: '/showcase'});
  //$locationProvider.hashPrefix('!');
});
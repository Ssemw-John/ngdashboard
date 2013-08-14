// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';  Array.prototype.remove = function(e) {
    var i;

    if ((i = this.indexOf(e)) !== -1) {
      return this.splice(i, 1);
    }
  };

  angular.module('resourceFoundryApp', ['resourceFoundryDirectives', 'resourceFoundryServices', 'resourceFoundryData', 'ui.bootstrap', 'ngResource']).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/landing.html',
      controller: 'LandingCtrl'
    }).when('/add', {
      templateUrl: 'views/resource-form.html',
      controller: 'ResourceCtrl'
    }).when('/edit/:id', {
      templateUrl: 'views/resource-form.html',
      controller: 'ResourceCtrl'
    }).when('/list/:path', {
      templateUrl: 'views/list.html',
      controller: 'ResourceCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

}).call(this);

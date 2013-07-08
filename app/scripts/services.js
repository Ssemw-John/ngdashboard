// Generated by CoffeeScript 1.6.3
'use strict';
var Resources;

angular.module('resourceFoundryServices', []);

angular.module('resourceFoundryServices').factory('keygen', function() {
  return function(string) {
    return string.toLowerCase().replace(" ", "");
  };
});

angular.module('resourceFoundryServices').service('Resources', Resources = (function() {
  function Resources($http, $q, $rootScope) {
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.resources = this.$q.defer();
    this.fetch();
  }

  Resources.prototype.fetch = function() {
    var _this = this;
    return this.$http({
      method: 'GET',
      url: '/data.json'
    }).success(function(data, status, config) {
      return _this.resources.resolve(data);
    }).error(function() {
      console.log('data error has occurred');
      return _this.resources.reject('error fetching data');
    });
  };

  Resources.prototype.get = function() {
    return this.resources.promise;
  };

  Resources.prototype.add = function(resource) {
    return this.resources.promise.then(function(resources) {
      return resources.push(resource);
    });
  };

  return Resources;

})());

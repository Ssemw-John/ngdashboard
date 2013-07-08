// Generated by CoffeeScript 1.6.3
'use strict';
angular.module("resourceFoundryData", []);

angular.module("resourceFoundryData").value("mediaTypes", {
  article: "Article",
  reference: "Reference",
  tutorial: "Tutorial",
  tool: "Tool",
  talk: "Talk",
  video: "Video",
  blog: "Blog",
  book: "Book"
});

angular.module("resourceFoundryData").value("topics", {
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  frontend: "Front End",
  jquery: "jQuery",
  backbone: "Backbone",
  tooling: "Tooling",
  haml: "HAML",
  less: "LESS",
  sass: "SASS",
  angular: "AngularJS"
});

angular.module("resourceFoundryData").value("levels", {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  all: "All"
});

angular.module("resourceFoundryData").value("costs", {
  free: "Free",
  paid: "Paid",
  freemium: "Freemium"
});

angular.module("resourceFoundryData").value("paths", {
  webdevelopment: "Web Development",
  marketing: "Marketing"
});

angular.module("resourceFoundryData").factory("map", function(mediaTypes, topics, levels, costs, paths) {
  return _.memoize(function(mapName, key) {
    var map;
    map = (function() {
      switch (mapName) {
        case "mediaType":
          return mediaTypes;
        case "topic":
          return topics;
        case "level":
          return levels;
        case "cost":
          return costs;
        case "path":
          return paths;
      }
    })();
    if (map[key] != null) {
      return map[key];
    } else {
      return key;
    }
  }, function(arg1, arg2) {
    return arg1 + arg2;
  });
});

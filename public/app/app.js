'use strict';

define(
  [
    'angular',
    'jQuery',
    'underscore',
    'angular-resource',
    'angular-ui-router',
    'ngMaterial',
    'ngMap',
  ],
  function (angular) {

    var app = angular.module('app', [
      'ngMaterial',
      'ngResource',
      'ui.router',
      'ngMap',
    ]);

    app
      .config(function ($provide, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);
      })
      .config([
        '$qProvider', function ($qProvider) {
          $qProvider.errorOnUnhandledRejections(false);
        }])
      .run([
        '$http', '$rootScope', 'initializer',
        function ($http, $rootScope, initializer) {
          initializer.launch();
        },
      ]);

    return app;
  },
);

'use strict';

define([
  'app',
  './config/resource',
  './controllers/map',
  './services/initializer',
  './services/fourSquare',
], function (app) {
  app.run([
    '$http',
    '$window',
    '$location',
    '$rootScope',
    function (
      $http,
      $window,
      $location,
      $rootScope,
    ) {
      $rootScope.$on('$stateChangeStart', function (event, toState) {
        $rootScope.appState = toState.name;

        $(window).scroll(function () {
          // JQuery goes here ...
        });

      });
    },
  ]);
});

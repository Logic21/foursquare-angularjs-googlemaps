'use strict';

define(['app'], function (app) {

  app.config([
    '$stateProvider', function ($stateProvider) {
      $stateProvider.state('about', {
        url: '/',
        templateUrl: '/app/Layout/views/map.html',
        controller: 'MapCtrl',
      });
    }]);

});

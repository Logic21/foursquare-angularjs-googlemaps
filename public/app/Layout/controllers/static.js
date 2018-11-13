'use strict';

define(['app'], function (app) {
  app.controller(
    'StaticCtrl', [
      'NgMap',
      '$location',
      '$scope',
      'fourSquare',
      function (
        NgMap,
        $location,
        $scope,
        fourSquare,
      ) {

        NgMap.getMap().then(function (map) {
        });

        $scope.venues = [];
        fourSquare
          .search('Chicago,IL')
          .then(function (response) {
            $scope.venues = response.data.response.venues;
            console.log($scope.venues);
          });

      },
    ]);
});

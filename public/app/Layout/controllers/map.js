'use strict';

define(['app'], function (app) {
  app.controller(
    'MapCtrl', [
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

        $scope.centerMap = function (venue) {
          NgMap.getMap().then(function (map) {
            console.log(venue);
            map.setCenter(
              {lat: venue.location.lat, lng: venue.location.lng},
            );
          });
        };

        $scope.venues = [];
        fourSquare
          .search('San Diego,CA')
          .then(function (response) {
            $scope.venues = response.data.response.venues;
            console.log($scope.venues);
          });

      },
    ]);
});

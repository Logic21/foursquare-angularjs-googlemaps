'use strict';

define(['app'], function (app) {
  app.controller(
    'StaticCtrl', [
      '$location',
      '$scope',
      'fourSquare',
      function (
        $location,
        $scope,
        fourSquare,
      ) {
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

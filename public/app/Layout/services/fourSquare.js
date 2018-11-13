'use strict';

define(
  [
    'app',
  ],
  function () {
    angular
      .module('app')
      .service('fourSquare', [
        '$http',
        function ($http) {
          return {
            search: function (location) {
              var clientId = 'FKPUYLMSE3TDFM2FL4DSMXZB04S1SLVFK305XM03FZXTY5MF';
              var clientSecret = 'I2NWDNB4B1ALFADIONJ1EM33GHF1VOB4MFH4TGZC50FMV3QI';
              var apiDate = '20181010';
              var url = 'https://api.foursquare.com/v2/venues/search?near=' +
                location +
                '&client_id=' + clientId +
                '&client_secret=' + clientSecret +
                '&v=' + apiDate;

              return $http({
                method: 'GET',
                url: url,
              });
            },
          };
        },
      ]);
  },
);

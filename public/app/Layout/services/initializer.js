'use strict';

define(['app'], function (app) {
  angular.module('app').service('initializer', [
    function () {
      return {
        launch: function () {

          console.log('----------- App loaded ... -----------');

        },
      };
    },
  ]);
});

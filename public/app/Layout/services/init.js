'use strict'

define(['app'], function (app) {
  angular.module('app').service('initService', [
    function () {
      return {
        launch: function () {

          console.log('----------- App Loaded! -----------')
        },
      }
    },
  ])
})

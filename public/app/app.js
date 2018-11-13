'use strict'

define([
    'angular',
    'jQuery',
    'underscore',
    'angular-resource',
    'angular-cookies',
    'angular-sanitize',
    'ui-validate',
    'angular-ui-router',
    'ngMessages',
    'ngAria',
    'ngAnimate',
    'angular-moment',
    'ngMaterial',
    'ngTagsInput',
  ],
  function (angular) {

    var app = angular.module('app', [
      'ngMaterial',
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ui.router',
      'ui.validate',
      'ngMessages',
      'ngAria',
      'ngAnimate',
      'angularMoment',
      'ngTagsInput',
    ])

    app.config(function ($provide, $locationProvider, $httpProvider) {
      $httpProvider.defaults.withCredentials = true
      $locationProvider.html5Mode(true)
    }).config([
      '$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false)
      }]).run([
      '$http', '$rootScope', 'initService',
      function ($http, $rootScope, initService) {
        initService.launch()
      },
    ])

    return app
  })

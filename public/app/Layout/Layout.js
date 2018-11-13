'use strict'

define([
  'app',
  './config/resource',

  './controllers/static',

  './services/init',

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
        $rootScope.appState = toState.name

        $(window).scroll(function () {
          var sidebar = $('.sidebar')
          var scroll = $(window).scrollTop()

          if (scroll >= 80) {
            sidebar.addClass('--fixed')
          } else {
            sidebar.removeClass('--fixed')
          }

        })

      })
    },
  ])

})

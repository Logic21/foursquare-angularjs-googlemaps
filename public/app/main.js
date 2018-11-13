'use strict';

require.config({
  paths: {
    'jQuery': '../bower_components/jquery/jquery.min',
    'underscore': '../bower_components/underscore/underscore-min',
    'domReady': '../bower_components/domReady/domReady',
    'angular': '../bower_components/angular/angular.min',
    'angular-resource': '../bower_components/angular-resource/angular-resource.min',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
    'ngAria': '../bower_components/angular-aria/angular-aria.min',
    'ngAnimate': '../bower_components/angular-animate/angular-animate.min',
    'ngMessages': '../bower_components/angular-messages/angular-messages.min',
    'ngMaterial': '../bower_components/angular-material/angular-material.min',
    'ngMap': '../bower_components/ngmap/build/scripts/ng-map',
  },
  shim: {
    'jQuery': {
      'exports': 'jQuery',
    },
    'angular': {
      'exports': 'angular',
      deps: ['jQuery'],
    },
    'ngMap': ['angular'],
    'ngAria': ['angular'],
    'ngAnimate': ['angular'],
    'ngMessages': ['angular'],
    'ngMaterial': {
      deps: ['ngAria', 'ngAnimate', 'ngMessages'],
    },
    'angular-i18n': ['angular'],
    'angular-ui-router': ['angular'],
    'domReady': ['angular'],
    'angular-resource': ['angular'],
    'md5': ['angular'],
    'uiCropper': ['angular', 'jQuery'],
    'headroom': ['jQuery'],
    'ngHeadroom': ['angular', 'headroom'],
  },
  deps: [
    './Layout/Layout',
    'bootstrap',
  ],
  priority: [
    'angular',
  ],
  waitSeconds: 0,
});

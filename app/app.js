'use strict';

// Declare app level module which depends on views, and components
angular.module('foodApp', ['ui.router', 'foodApp.main', 'ngResource']);
angular.module('foodApp').run(['$state', function($state){
   $state.go('mainPage');
}]);
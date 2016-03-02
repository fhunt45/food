'use strict';

angular.module('foodApp.main',['ui.router', 'foodApp.main.controller', 'foodApp.main.services', 'foodApp.main.directives']);
angular.module('foodApp.main').config(function($stateProvider){
   $stateProvider.state('mainPage',{
      url: '/food',
      templateUrl: 'food_module/food.html',
      controller: 'FoodController'
   });
   $stateProvider.state('foodValues',{
      url: '/food/:id',
      templateUrl: 'food_module/foodValues.html',
      controller: 'FoodDetailsController'
   });

});
'use strict';
angular.module('foodApp.main.controller', []);
angular.module('foodApp.main.controller').controller('FoodController', ['$scope','Post',function($scope, Post){
   $scope.getFood = function(val){
      $scope.food1 = Post.get({food:val});
   }
}]).controller('FoodDetailsController', ['$stateParams', '$state', '$scope','GetValues',function($stateParams, $state, $scope, GetValues){
   $scope.foodValues = GetValues.get({ndbid:$stateParams.id});
   $scope.closeValues = function(){
      $state.go('mainPage');
   }
}]);
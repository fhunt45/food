angular.module('foodApp.main.directives', []);
angular.module('foodApp.main.directives').directive('search', function(){
   return function($scope, element){
      element.bind('keyup', function(e){
         var val = element.val();
         if(val.length > 2){
            $scope.getFood(val);
         }
      });
   }
});
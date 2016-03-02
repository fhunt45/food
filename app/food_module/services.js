'use strict';
angular.module('foodApp.main.services', []);
angular.module('foodApp.main.services').factory('Post', ['$resource', 'Search_API_URL', function($resource, Search_API_URL){
   return $resource(Search_API_URL, {food:'@query'}, {});
}]).factory('GetValues', ['$resource', 'Single_API_URL', function($resource, Single_API_URL){
   return $resource(Single_API_URL, {ndbid:'@ndbid'}, {});
}])
.value('Search_API_URL', 'http://api.nal.usda.gov/ndb/search/?format=json&q=:food&api_key=FLOGRW8kYeRwDSQpcinUnIew3mkOVnhFKjYk5TKM')
.value('Single_API_URL', 'http://api.nal.usda.gov/ndb/reports/?ndbno=:ndbid&type=b&format=json&api_key=FLOGRW8kYeRwDSQpcinUnIew3mkOVnhFKjYk5TKM');
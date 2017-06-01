app.factory('ItemFactory', function($http, $cookies){
  var factory = {};

  factory.create = function(newItem, callback){
    $http.post('/items', newItem).then(callback);
  }
  factory.index = function(callback){
    $http.get('/items').then(callback);
  }

  return factory;
})

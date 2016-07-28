app.factory('SearchFactory', function($http){
  var SearchFactoryObj = {};

  SearchFactoryObj.getTypes = function(){
    return $http.get('/api/buildings/types/')
    .then(function(types){return types.data});
  }

  SearchFactoryObj.searchFields = function(obj){

    // OB/BG: instead of manually embedding query string $http.get('whatever', {params: someObj});
    return $http.get('/api/buildings/?'+"propertyType="+obj.propertyType)
    .then(buildings=>buildings.data);
  }

  return SearchFactoryObj;
})

app.factory('SearchFactory', function($http){
  var SearchFactoryObj = {};

  SearchFactoryObj.getTypes = function(){
    return $http.get('/api/buildings/types/')
    .then(function(types){return types.data});
  }

  SearchFactoryObj.searchFields = function(obj){

    return $http.get('/api/buildings/?'+"propertyType="+obj.propertyType)
    .then(buildings=>buildings.data);
  }

  return SearchFactoryObj;
})

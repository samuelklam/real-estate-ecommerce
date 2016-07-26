app.factory('BuildingFactory', function ($http) {

  var BuildingFactory = {};

  BuildingFactory.fetchAll = function () {
    return $http.get('/api/buildings/?')
    .then(function (response) { return response.data; });
  };

    BuildingFactory.fetchOne = function (id) {
    return $http.get('/api/buildings/' +id)
    .then(function (response) { return response.data; });
  };

  return BuildingFactory;
});

//single building page
app.config(function ($stateProvider) {
  $stateProvider.state('building', {
    url: '/properties/:id',
    templateUrl: 'js/building-detail/building-detail.html',
    controller: 'BuildingCtrl',
    resolve:{
      theBuilding: function (BuildingFactory, $stateParams){
        return BuildingFactory.fetchOne($stateParams.id);
      }
    }
  })
})

app.controller('BuildingCtrl', function($scope, theBuilding, $log){
  $scope.building = theBuilding;
})

//building child states for reviews
app.config(function ($stateProvider) {
  $stateProvider.state('building.reviews', {
    url: '/reviews',
    templateUrl: 'js/building-detail/building-reviews.html'/*,
    resolve:{
      theBuilding: function (BuildingFactory, $stateParams){
        return BuildingFactory.fetchOne($stateParams.id);
      }*/
    //}
  })
  .state('building.write', {
    url: '/write',
    templateUrl: 'js/building-detail/building-write.html'
  })
})


//all buildings page
app.config(function ($stateProvider) {
  $stateProvider.state('buildings', {
    url: '/properties',
    templateUrl: 'js/building-detail/buildings.html',
    controller: 'BuildingsCtrl',
    resolve:{
      allBuildings: function (BuildingFactory){
        return BuildingFactory.fetchAll();
      }
    }
  })
})

app.controller('BuildingsCtrl', function($scope, allBuildings){
  $scope.buildings = allBuildings;
})


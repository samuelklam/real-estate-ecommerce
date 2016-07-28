app.controller('BuildingCtrl', function($scope, theBuilding, $log){
  $scope.building = theBuilding;
})

//building child states for reviews
app.config(function ($stateProvider) {
  $stateProvider.state('building.reviews', {
    url: '/reviews',
    templateUrl: 'js/building-detail/templates/building-reviews.html'/*,
    resolve:{
      theBuilding: function (BuildingFactory, $stateParams){
        return BuildingFactory.fetchOne($stateParams.id);
      }*/
    //}
  })
  .state('building.write', {
    url: '/write',
    templateUrl: 'js/building-detail/templates/building-write.html'
  })
})


// all buildings page
app.config(function ($stateProvider) {
  $stateProvider.state('buildings', {
    url: '/properties', // OB/BG: can have a query string on the end
    templateUrl: 'js/building-detail/templates/buildings.html',
    controller: 'BuildingsCtrl',
    resolve:{
      allBuildings: function (BuildingFactory){
        return BuildingFactory.fetchAll();
      }
    }
  })
})

// commercial buildings page
app.config(function ($stateProvider) {
  $stateProvider.state('buildingscommercial', {
    url: '/properties/commercial',
    templateUrl: 'js/building-detail/templates/buildings.html',
    controller: 'BuildingsCommercialCtrl',
    resolve:{
      allCommercialBuildings: function (BuildingFactory){
        return BuildingFactory.fetchAllCommercial();
      }
    }
  })
})

// residential buildings page
app.config(function ($stateProvider) {
  $stateProvider.state('buildingsresidential', {
    url: '/properties/residential',
    templateUrl: 'js/building-detail/templates/buildings.html',
    controller: 'BuildingsCommercialCtrl',
    resolve:{
      allCommercialBuildings: function (BuildingFactory){
        return BuildingFactory.fetchAllResidential();
      }
    }
  })
})

// mixed buildings page
app.config(function ($stateProvider) {
  $stateProvider.state('buildingsmixed', {
    url: '/properties/mixed',
    templateUrl: 'js/building-detail/templates/buildings.html',
    controller: 'BuildingsMixedCtrl',
    resolve:{
      allMixedBuildings: function (BuildingFactory){
        return BuildingFactory.fetchAllMixed();
      }
    }
  })
})

//single building page
app.config(function ($stateProvider) {
  $stateProvider.state('building', {
    url: '/properties/:id',
    templateUrl: 'js/building-detail/templates/building-detail.html',
    controller: 'BuildingCtrl',
    resolve:{
      theBuilding: function (BuildingFactory, $stateParams){
        return BuildingFactory.fetchOne($stateParams.id);
      }
    }
  })
})


app.controller('BuildingsCtrl', function($scope, allBuildings){
  $scope.buildings = allBuildings;
})

app.controller('BuildingsCommercialCtrl', function($scope, allCommercialBuildings){
  $scope.buildings = allCommercialBuildings;
})

app.controller('BuildingsResidentialCtrl', function($scope, allResidentialBuildings){
  $scope.buildings = allResidentialBuildings;
})

app.controller('BuildingsMixedCtrl', function($scope, allMixedBuildings){
  $scope.buildings = allMixedBuildings;
})


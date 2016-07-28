app.config(function($stateProvider){
  $stateProvider.state('search-results', {
    url: '/buildings/:searchProps',
    templateUrl: 'js/search-results/search-results.html',
    controller: 'ResultsCtrl',
    resolve: {
      theBuildings: function($stateParams, SearchFactory){
        console.log("****Props***", $stateParams.searchProps);
        var searchProps = JSON.parse($stateParams.searchProps);
        return SearchFactory.searchFields(searchProps);
      }
    }
  })
})

app.controller('ResultsCtrl', function($scope, theBuildings){
  $scope.buildings = theBuildings;
})

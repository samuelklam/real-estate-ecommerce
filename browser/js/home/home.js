app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve:{
          useTypes: function (SearchFactory){
        return SearchFactory.getTypes();
      }
    }
    });
});

app.controller('HomeCtrl', function($scope, $state, $log, SearchFactory, useTypes){

  // $scope.types = [{name:"Commercial"}, {name:"Residential"}, {name: "Mixed-Use"}];
  $scope.types = useTypes;
  $scope.styles= [{name:"Beaux Arts"}, {name:"Modern"}, {name: "Art Deco"}, {name: "International"}, {name:"Brutalist"}, {name:"Federalist"}, {name:"Renaissance Revival"}, {name:"Greek Revival"}];
  $scope.message = "Hello!";
  $scope.search = function(){
    var searchProps = JSON.stringify($scope.searchProps);
    $state.go("search-results", {searchProps: searchProps})
    }
})

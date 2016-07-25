app.config(function ($stateProvider) {
  $stateProvider.state('building-detail', {
    url: '/building/:id'
    templateUrl: 'js/building-detail/building-detail.html',
    controller: 'BuildingCtrl'
  })
})

app.controller('BuildingCtrl', function($scope){

})

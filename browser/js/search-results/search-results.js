app.config(function($stateProvider){
  $stateProvider.state('search-results', {
    url: '/buildings',
    templateUrl: 'js/search-results/search-results.html',
    controller: 'ResultsCtrl'
  })
})

app.controller('ResultsCtrl', function($scope){

})

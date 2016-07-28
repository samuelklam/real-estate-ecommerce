app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupCtrl'
    });

     $stateProvider.state('property', {
        url: '/properties',
        templateUrl: 'js/building-detail/buildings.html',
        controller: 'SignupCtrl'
    });


});


//NOTE: I copied pasted from fsg's login and replaced login=> signup
//we still need to write this controller properly
app.controller('SignupCtrl', function ($scope, AuthService, $state, UserFactory) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendSignup = function () {
        UserFactory.create($scope.newUser)
        .then(function(user){
            $state.go('property')
        })
        .catch(function(error){
            console.error(error)
        })




    };

});

app.factory('UserFactory', function ($http, AuthService) {

  var UserFactory = {};

  UserFactory.create = function (data) {
    return $http.post('/api/users/', data) // OB/BG: probably don't want to submit to /api/users
    .then(function(response){
      return AuthService.login(data)
    })
    .then(function (response) { return response.data; })
    .catch(function(error){console.error(error);
    });
  };


  return UserFactory;
});

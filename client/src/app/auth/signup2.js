angular.module('app.signup2', [])


.controller('signup2Controller', function ($scope, $rootScope, $window, $location, $http, $timeout) {
  console.log($rootScope.authResult.token);
  var token = $rootScope.authResult.token;
   $scope.flag = false;
   
   $scope.enterName = function(fullname){
    $http({
      method: 'POST',
      url: '/updateprofile',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type' : 'application/json'
      },
      data: {
        'fullname': fullname
      }
    })
    .success(function(data){
      //console.log(data);
      $scope.flag = true;
      $scope.response = "Your name is updated!";
      $timeout(function(){ $location.path("/dashboard")}, 3000);
    })
    .catch(function(err){
      console.log(err);
    })
  };


});
var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('Home', ['$scope', '$location',
  function ($scope, $location) {
      $(document.body).removeAttr("class");
      $(document.body).addClass("home1");
      $scope.showLogin = function () {
          $location.path('/login');
          
      };
      $scope.showSignup=function()
      {
          $location.path('/signup');
      }
      /*
      $http.get('phones/phones.json').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
      */
  }]);
homeControllers.controller('Login', ['$scope', '$location',
function ($scope, $location) {
    $(document.body).removeAttr("class");
    $(document.body).addClass("loginbg");
    $scope.goBack = function () {
        $location.path('/home');

    };
}]);
homeControllers.controller('SignUp', ['$scope', '$location',
function ($scope, $location) {
    $(document.body).removeAttr("class");
    $(document.body).addClass("signupbg");
    $scope.goBack=function()
    {
        $location.path('/home');
    }
}]);
homeControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
  }]);
var homeControllers = angular.module('homeControllers', []);

homeControllers.controller('Home', ['$scope', '$http',
  function ($scope, $http) {
      /*
      $http.get('phones/phones.json').success(function (data) {
          $scope.phones = data;
      });

      $scope.orderProp = 'age';
      */
  }]);

homeControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
      $scope.phoneId = $routeParams.phoneId;
  }]);
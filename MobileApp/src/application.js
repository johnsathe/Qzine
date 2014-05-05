var qzineApp = angular.module('qzineApp', [
  'ngRoute',
  'homeControllers'
]);
qzineApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'Home'
        }).

        otherwise({
            redirectTo: '/home'
        });
  }]);
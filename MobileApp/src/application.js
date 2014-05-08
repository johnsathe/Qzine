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
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'Login'
        }).
          when('/signup', {
              templateUrl: 'partials/signup.html',
              controller: 'SignUp'
          }).
        otherwise({
            redirectTo: '/home'
        });
  }]);
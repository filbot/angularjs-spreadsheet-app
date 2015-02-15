var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

// Routing
myApp.config(['$routeProvider', function ($routeProvider) {
$routeProvider.
    when('/login', {
        templateUrl: 'views/login.html'
    }).
    when('/table', {
        templateUrl: 'views/table.html',
        controller: 'TableController'
    }).
    otherwise({
        redirectTo: '/login'
    });
}]);
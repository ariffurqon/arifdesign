var app = angular.module('arifdesign', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        //homepage
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainCtrl'
        })

        .when('/portfolio', {
            templateUrl: 'templates/portfolio.html',
            controller: 'MainCtrl'
        })

        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);


app.controller('MainCtrl', function () {});
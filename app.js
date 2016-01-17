var app = angular.module('arifdesign', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
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
}]);


app.controller('MainCtrl', function () {});
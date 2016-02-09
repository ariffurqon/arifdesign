var app = angular.module('arifdesign', ['ngRoute', 'ngAnimate']);

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


app.controller('MainCtrl', function ($scope) {
    $scope.pageClass = 'page-effect';
});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, category: 'webapp', src: "dlish.png", description: 'A web application for curating the best foodie adventures built using Angular.js frameworks with Firebase.', url_details: "details.html" },
          { num: 2, category: 'desktopapp', src: "spider.png", description: 'desktop app ', url_details: "details.html" },
          { num: 3, category: 'mobileapp', src: "biblio.png", description: 'mobile app', url_details: "details.html" }];


});


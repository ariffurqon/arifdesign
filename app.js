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

        .when('/blog', {
            templateUrl: 'templates/blog.html',
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
    console.log("Page Controller is working..");
    $scope.pageClass = 'page-effect';

});

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          { num: 1, 
            category: 'web', 
            src: "dlish.png", 
            description: 'foodie adventure app to curate the best spot in town to dine, wine and hang out', 
            url_details: "dlish.html" },

          { num: 2, 
            category: 'desktop', 
            src: "spider.png", 
            description: 'tabbed browser desktop app built using NW.js, express and angular.', 
            url_details: "spider.html" },

          { num: 3, 
            category: 'mobile', 
            src: "biblio.png", 
            description: 'mobile app to search for books using google-books api built with React-Native.', 
            url_details: "biblio.html" }];
});


'use strict';
app.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('current');
                        } else {
                            angular.element(li).removeClass('current');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    }
} ]);







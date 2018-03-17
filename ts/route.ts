class Route {
    constructor() {

        angular.module('app').config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: 'pages/page1.html',
                controller: 'page1'
            }).when("/page2", {
                templateUrl: 'pages/page2.html',
                controller: 'page2'
            }).otherwise({
                    templateUrl: 'pages/pageError.html',
                    controller:'ErrorPage'
                });// if page not found
        });
    }
}
new Route();
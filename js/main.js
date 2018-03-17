angular.module('app', ['ngRoute', 'ngSanitize']);
angular.module('app').controller('control', function () { });
var ErrorPage = /** @class */ (function () {
    function ErrorPage() {
        this.app = angular.module('app');
        this.app.controller("ErrorPage", this.Controller);
    }
    /**
     * Creating the controller and initializate
     */
    ErrorPage.prototype.Controller = function ($scope, $sce) {
        $scope.ErrorMsg = $sce.trustAsHtml("Error <p>PAGE NOT FOUND</p>");
    };
    return ErrorPage;
}());
new ErrorPage();
var Page1 = /** @class */ (function () {
    function Page1() {
        this.app = angular.module('app');
        this.app.controller("page1", this.Controller);
    }
    /**
     * Creating the controller and initializate
     */
    Page1.prototype.Controller = function ($scope, $http) {
        $scope.AddModel = Page1.AddModel;
        $scope.GetList = Page1.GetList;
        $scope.Collection = [];
        Page1.scope = $scope;
        Page1.http = $http;
    };
    /***
     * Creating all methods
     * all methods must be private and static
     */
    Page1.AddModel = function (params) {
        //Cleaning the textbox
        Page1.scope.model = null;
        //Getting the date
        params.DateSave = new Date();
        //Add the new  value
        Page1.scope.Collection.push(angular.copy(params));
    };
    Page1.GetList = function () {
        Page1.http.get('https://viacep.com.br/ws/01001000/json/')
            .then(function (x) { })
            .catch(function (x) { });
    };
    return Page1;
}());
new Page1();
var Page2 = /** @class */ (function () {
    function Page2() {
        this.app = angular.module('app');
        this.app.controller("page2", this.Controller);
    }
    Page2.prototype.Controller = function ($scope) {
    };
    return Page2;
}());
new Page2();
var Route = /** @class */ (function () {
    function Route() {
        angular.module('app').config(function ($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: 'pages/page1.html',
                controller: 'page1'
            }).when("/page2", {
                templateUrl: 'pages/page2.html',
                controller: 'page2'
            }).otherwise({
                templateUrl: 'pages/pageError.html',
                controller: 'ErrorPage'
            }); // if page not found
        });
    }
    return Route;
}());
new Route();
var GridPage1 = /** @class */ (function () {
    function GridPage1() {
    }
    return GridPage1;
}());

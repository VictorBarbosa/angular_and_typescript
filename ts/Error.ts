
class ErrorPage {
    app: any = angular.module('app')
    static scope: any;


    constructor() {
        this.app.controller("ErrorPage", this.Controller)
    }
    /**
     * Creating the controller and initializate
     */
    Controller($scope, $sce) {
        $scope.ErrorMsg = $sce.trustAsHtml("Error <p>PAGE NOT FOUND</p>");
    }

}
new ErrorPage();
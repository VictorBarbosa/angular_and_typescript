class Page2 {
    app: any = angular.module('app')
    constructor() {
        this.app.controller("page2", this.Controller)
    }
    Controller($scope) {
        
    }

}
new Page2();
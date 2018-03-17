
class Page1 {
    app: any = angular.module('app')
    static scope: any;
    static http: any;
    constructor() {
        this.app.controller("page1", this.Controller)
    }
    /**
     * Creating the controller and initializate
     */
    Controller($scope, $http) {
        $scope.AddModel = Page1.AddModel
        $scope.GetList = Page1.GetList
        $scope.Collection = [];
        Page1.scope = $scope
        Page1.http = $http;
    }
    /***
     * Creating all methods
     * all methods must be private and static
     */
    private static AddModel(params: GridPage1) {
        //Cleaning the textbox
        Page1.scope.model = null
        //Getting the date
        params.DateSave = new Date()
        //Add the new  value
        Page1.scope.Collection.push(angular.copy(params))
    }
    private static   GetList() {
        Page1.http.get('https://viacep.com.br/ws/01001000/json/')
            .then(x=>{})
            .catch(x => {  })
    }
}
new Page1();

var myApp = angular.module("myApp",[]);
myApp.controller("myCtrl",["$scope",function($scope){

    $scope.arr = [
        {
            FirstName:"lili",Salary:1233350,LastName:"linst",Birthday:1480734686504,Age:23
        },
        {
            FirstName:"java",Salary:123553240,LastName:"script",Birthday:1480455686504,Age:22
        },
        {
            FirstName:"nodejs",Salary:232351230,LastName:"java",Birthday:1486725676504,Age:20
        },
        {
            FirstName:"angular",Salary:2345345,LastName:"sass",Birthday:1480789566504,Age:45
        },
        {
            FirstName:"jquery",Salary:2345456,LastName:"require",Birthday:1484556786504,Age:34
        }
    ];
    var ng = false;
    $scope.textfirst = "";
    $scope.textlast = "";
    $scope.value = "FirstName";
    $scope.falg = false;

    $scope.paixu = function(obj){
        $scope.falg = ($scope.value == obj) ? !$scope.falg : false;
        $scope.value = obj;
    };
    $scope.getClass = function(obj){
        if($scope.value == obj){
            return $scope.falg ? "down":"up";
        }
    };
    $scope.checks = function(){
        var che = document.querySelector("#checkbox");
        ng = che.checked;
    };
    $scope.search = function(obj){
        if(!ng){
            if($scope.textfirst !=""){
                if(obj.FirstName.toLowerCase().indexOf($scope.textfirst.toLowerCase())!= -1){
                    return true;
                }
            } else if($scope.textlast !=""){
                if(obj.LastName.toLowerCase().indexOf($scope.textlast.toLowerCase())!= -1){
                    return true;
                }
            } else {
                return true;
            }
        }
    }

}]);

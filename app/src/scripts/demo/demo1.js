
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

    $scope.value = "";
    $scope.isshow1 = true;
    $scope.isshow2 = true;
    $scope.isshow3 = true;
    $scope.shows1 = false;
    $scope.shows2 = false;
    $scope.shows3 = false;

    $scope.paixu = function(){
        $scope.shows1 = true;
        $scope.shows2 = false;
        $scope.shows3 = false;
        tab("isshow1","FirstName");
    };

    $scope.last = function(){
        $scope.shows1 = false;
        $scope.shows2 = true;
        $scope.shows3 = false;
        tab("isshow2","LastName");
    };

    $scope.dirth = function(){
        $scope.shows1 = false;
        $scope.shows2 = false;
        $scope.shows3 = true;
        tab("isshow3","Birthday");
    };

    function tab(num,str){
        if($scope.value == str){
            $scope.value = "-"+str;
            $scope[num] = false;
        }else{
            $scope.value = str;
            $scope[num] = true;
        }
    }
}]);

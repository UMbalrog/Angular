function myCtrl($scope,$http){
    getyan();
    function getyan(){
        var str = "abcdefghijklmnopqrstuvwxyz";
        $scope.str1 = "";
        for(var i = 0; i<4; i++){
            //这里也可以做去重
            var num = Math.floor(Math.random()*26);
            $scope.str1 += str[num];
        }
    }
    function getusername(name,pass) {
        var params = {
            username:name,
            password:pass
        };
        $http.post("../mock/livelist.json",params).then(function(datas){
            console.log(datas);
            //根据datas返回，判断结果

            //假设账号密码为aaa 123
            if(name == "aaa"){
                if(pass == "123"){
                    alert("登录成功");
                }else{
                    $scope.ishow_pass = true;
                }
            }else{
                $scope.ishow_name = true;
            }
        });
    }
    $scope.tab = function(){
        getyan()
    };
    $scope.getfocus = function(){
        getyan();
        $scope.ishow_yan = false;
        $scope.yanzhen = '';
    };
    $scope.submit = function(){
        if($scope.yanzhen == $scope.str1){
            getusername($scope.username,$scope.password);
        }else{
            $scope.ishow_yan = true;
        }
    };




}
angular.module("myApp",[])
    .controller("myCtrl",myCtrl);
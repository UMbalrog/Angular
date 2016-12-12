function homeCon($scope,proData,homeservice){
    console.log(proData);
    //ajax请求渲染数据
    renderData(proData.data);
//转换二维数组
    function dataFormat(data){
        var tempArr=[];
        for(var i=0,len=Math.ceil(data.length/2);i<len;i++){
            tempArr[i]=[];
            tempArr[i].push(data[i*2]);
            data[i*2+1] && tempArr[i].push(data[i*2+1]);
        }
        return tempArr;
    }
//渲染数据
    function renderData(data){
        var lists=dataFormat(data),
            html="",
            i,
            len=lists.length,
            obj1,obj2;
        for(i=0;i<len;i++){
            obj1=lists[i][0];
            obj2=lists[i][1];
            html+="<ul><li></li>"
                +"<li><a><img ng-click='tiao(11)' ui-sref='show/"+obj1.id+"' src='"+obj1.img+"'><b>"+obj1.title+"</b></a>"
                +"</li><li></li>"
                +"<li><a><img ng-click='tiao(11)' ui-sref='show/"+obj2.id+"' src='"+obj2.img+"'><b>"+obj2.title+"</b></a>"
                +"</li><li></li>"
                +"</ul>";
        }
        $("#list").html(html);
        //myScroll.refresh();  //刷新
        //swiper2()
    }
    homeservice.swiper();
    $scope.tiao = function(aa){
        alert(aa);
    }

}

function showCon($stateParams){
    console.log($stateParams.id);

    var html='<img src="./images/img1.jpg" /><p></p>';
    //console.log(html);
    $("#img").html(html);

    //getDetailData();
    function getDetailData(data){
        for(var i in data){
            for(var j=0;j<data[i].length;j++){
                if(data[i][j].id==id){
                    var html='<img src="'+data[i][j].img+'" /><p>'+data[i][j].description+'</p>';
                    //console.log(html);
                    $("#scroller").html(html);
                }
            }
        }
    }
}


angular.module("myApp")
    .controller("homecontroller",homeCon)
    .controller("showcontroller",showCon);
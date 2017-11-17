app.controller('homeViewController',['$scope','$http',function($scope,$http){
	$scope.content = "我是home路由内容";
	$scope.curData;
	$scope.page = 1;
	$scope.checkFun = function(){
		if(document.referrer!=""){
			console.log("登录跳转");
		}else{
			console.log("url进入");
			location.href = '../login.html';
		}
	}();
	
	$scope.prePage = function(){
		$scope.page --;
		getData($scope.page);
	}
	$scope.nextPage = function(){
		$scope.page ++;
		getData($scope.page);
	}
	getData($scope.page);
    function getData(page){
    	var promise = $http({
        	url: './json/data.json',
	        type: 'get'
	    });
	    promise.then(function(res) {
	        var data = res.data;
	        //console.log(data);
	        var count = Math.ceil(data.length/6);
	        //console.log(count);
	        if(page <= 0){
	        	alert("已经是第一行了!!!");
				page = 1;
			}
			if(page > count){
				alert("已经是最后一行了!!!");
				page = count;
			}
			$scope.page = page;
			$scope.data = data.slice(0 + (page-1)*6,6 + (page-1)*6);
	    }),
	    function() {
	        alert('请求数据失败！！');
	        //document.referrer==""; //判断是否是url进入
	    }
    }
    $scope.showInfo = function(index){
    	$scope.clickData = $scope.data[index];
    	console.log($scope.clickData);
    }
}])
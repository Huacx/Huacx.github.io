app.controller('contentViewController',['$scope','$http',function($scope,$http){
	$scope.content = "我是content路由内容";
	$scope.showFlag = 0;
	$scope.page=1;
	$scope.index = 0;
	$scope.childPage = 1;
	$scope.count = 0;
	$scope.showImg = 1;
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
        	url: './json/data2.json',
	        type: 'get'
	    });
	    promise.then(function(res) {
	        var data = res.data;
	        var count = Math.ceil(data.length/6);
	        if(page <= 0){
	        	alert("已经是第一页了!!!");
				page = 1;
			}
			if(page > count){
				alert("已经是最后一页了!!!");
				page = count;
			}
			$scope.page = page;
			$scope.data = data.slice(0 + (page-1)*6,6 + (page-1)*6);
	    }),
	    function() {
	        alert('请求数据失败！！');
	    }
    }
    $scope.showImg = function(index){
		$scope.showFlag = 1;
		$scope.index = index;
		$scope.listData = $scope.data[index].src;
		$scope.imgData = $scope.data[index];
		console.log(index);
		$scope.count = Math.ceil(($scope.listData).length/6);

		getChildFun($scope.childPage);
	}
	$scope.closeX = function(){
		$scope.showFlag = 0;
	}
	$scope.childPrePage = function(){
		$scope.childPage --;
		getChildFun($scope.childPage)
	}
	$scope.childNextPage = function(){
		$scope.childPage ++;
		getChildFun($scope.childPage)
	}
    
    function getChildFun(childPage){
    	console.log($scope.listData);
    	//var count = Math.ceil(($scope.listData).length/6);
    	//console.log(count)
    	if($scope.childPage <= 0){
        	alert("已经是第一页了!!!");
			$scope.childPage = 1;
		}
		if($scope.childPage > $scope.count){
			alert("已经是最后一页了!!!");
			$scope.childPage = $scope.count;
		}
		//$scope.childPage = childPage;
		// $scope.middleData = $scope.listData;

		$scope.listData2 = $scope.listData.slice(0 + ($scope.childPage-1)*6,6 + ($scope.childPage-1)*6);
		console.log($scope.listData2);
    }
     $scope.showDetail = function(index){
    	$scope.clickData = $scope.listData2[index];
    	console.log($scope.listData2);
    	$scope.showImg = 0;
    }
    $scope.closeDetail = function(){
    	$scope.showImg = 1;
    }
}])
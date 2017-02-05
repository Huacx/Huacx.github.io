app2.controller('vipViewController',['$scope','$http',function($scope,$http){
	$http({
		url:'/user/info',
		method:'post',
	}).then(function(res){
		if(res.data.resultCode){
			$scope.infoData = res.data.result;
			console.log($scope.infoData);
		}
	})
}])
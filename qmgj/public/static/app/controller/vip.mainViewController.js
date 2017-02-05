app2.controller('vip.mainViewController',['$scope','$http',function($scope,$http){
	$http({
		url:'/user/pros',
		method:'get'
	}).then(function(res){
		if(res.data.resultCode == '0000'){
			$scope.proCareData = res.data.result.procare;
			$scope.proHotData = res.data.result.prohot;
		}
		else{
			alert(res.data.resultMsg);
		}
	})
}])
app2.controller('vip.infoViewController',['$scope','$http',function($scope,$http){
	$scope.circleArr = ['微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧','其它'];
	$scope.checkbox = function(ev){
		console.log(ev);
		var liEle = angular.element(ev.target);
		$scope.careIndex =liEle.attr('data-value');
		liEle.toggleClass('active');
	}
	$scope.radio = function(ev){
		angular.element(ev.target).parent().children().removeClass('active');
		angular.element(ev.target).addClass('active');
	}
	$scope.submit = function(){
		alert('保存成功');
	}
}])
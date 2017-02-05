var app2 = angular.module('qmgj_login',['ui.router','ui.bootstrap']);
app2.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeViewController'
	}).state('vip',{
		url:'/vip',
		templateUrl:'static/app/view/vipView.html',
		controller:'vipViewController'
	}).state('vip.main',{
		url:'/main',
		templateUrl:'static/app/view/vip.mainView.html',
		controller:'vip.mainViewController'
	}).state('vip.info',{
		url:'/info',
		templateUrl:'static/app/view/vip.infoView.html',
		controller:'vip.infoViewController'
	}).state('vip.record',{
		url:'/record',
		templateUrl:'static/app/view/vip.recordView.html',
		controller:'vip.recordViewController'
	}).state('list',{
		url:'/list',
		templateUrl:'static/app/view/listView.html',
		controller:'listViewController'
	}).state('list2',{
		url:'/list/:searchVal',
		templateUrl:'static/app/view/listView.html',
		controller:'listViewController'
	})
}])



app2.controller('logoutController',['$scope','$http',function($scope,$http){
	$scope.userLogout = function(){
		$http({
			url:'/user/logout',
			method:'get',
		}).then(function(res){
			if(res.data.resultCode == '0000'){
				alert(res.data.resultMsg);
				location.reload();
			}
			else{
				alert(res.data.resultMsg);
			}
		})
	}
}])
app2.filter('substr',function(){
	return function(){
		var val = arguments[0],
			start = arguments[1],
			count = arguments[2];
		// {{'12334'|substr:4}}
		if(count == undefined){
			count = arguments[1];
			start = 0;
		}
		// {{'12334'|substr}}
		if(start == undefined){
			start = 0;
			count = val.length;
		}
		return val.substr(start,count);

	}
})
app2.filter('formatData',function(){
	var curDate = '';
	return function(lastTime){
		var hours = new Date(parseInt(lastTime)).getHours();
		if( hours>=3 && hours < 6 ){
			curDate = '凌晨好';
		}
		else if( hours>=6 && hours < 11 ){
			curDate = '上午好';
		}
		else if( hours>=11 && hours < 14 ){
			curDate = '中午好';
		}
		else if( hours>=14 && hours < 18 ){
			curDate = '下午好';
		}
		else if( hours>=18 && hours < 22 ){
			curDate = '晚上好';
		}
		else{
			curDate = '夜晚好';
		}
		return curDate;
	}
})
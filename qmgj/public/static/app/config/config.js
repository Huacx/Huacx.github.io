var app = angular.module('qmgj_unlogin',['ui.router','ui.bootstrap']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'static/app/view/homeView.html',
		controller:'homeViewController'
	}).state('login',{
		url:'/login',
		templateUrl:'static/app/view/loginView.html',
		controller:'loginViewController'
	}).state('register',{
		url:'/register',
		templateUrl:'static/app/view/registerView.html',
		controller:'registerViewController'
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

app.filter('substr',function(){
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
app.filter('formatData',function(){
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
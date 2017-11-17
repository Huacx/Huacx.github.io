var app = angular.module("myapp",['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'../view/homeView.html',
		controller:'homeViewController'
	}).state('content',{
		url:'/home',
		templateUrl:'../view/contentView.html',
		controller:'contentViewController'
	}).state('content2',{
		url:'/home',
		templateUrl:'../view/content2View.html',
		controller:'content2ViewController'
	})
}])
app.controller('loginViewController',['$scope','$http',function($scope,$http){
	var login = {
		init:function(){
			this.events();
		},
		events:function(){
			$scope.loginClick = function(){
				if($scope.myform.$valid){
					$http({
						url:'/user/login',
						method:'post',
						data:{
							phone:$scope.phone,
							password:$scope.pwd
						}
					}).then(function(res){
						console.log(res.data);
						if(res.data.resultCode == '0000'){
							alert('登录成功');
							location.reload();
						}
					})
				}
			}
		}
	}
	login.init();
}])
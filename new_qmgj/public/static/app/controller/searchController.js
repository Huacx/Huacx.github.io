app.controller('searchController',['$scope','$state',function($scope,$state){
    $scope.myKeyPress = function(ev) {
        if(ev.keyCode == 13){
        	$state.go('list2',{searchVal:ev.target.value});
        }
    }
}])
app2.controller('searchController',['$scope','$state',function($scope,$state){
    $scope.myKeyPress = function(ev) {
        if(ev.keyCode == 13){
        	$state.go('list2',{searchVal:ev.target.value});
        }
    }
}])
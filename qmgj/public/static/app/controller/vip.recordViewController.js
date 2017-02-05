app2.controller('vip.recordViewController', ['$scope', '$http', function($scope, $http) {
    var record = {
        init: function() {
            $scope.countAll = 0;
            $scope.count = 6;
            $scope.page = 1;
            $scope.maxSize = 6;
            $scope.type = 0;
            this.getData();
            this.events();
        },
        getData: function() {
            $http({
                url: '/user/RecordList',
                method: 'post',
                data: {
                    type: $scope.type,
                    page: $scope.page,
                    count: $scope.count
                }
            }).then(function(res){
            	console.log(res.data.result);
            	if(res.data.resultCode == '0000'){
	            	$scope.recordListData = res.data.result.list;
					$scope.countAll = res.data.result.count; 
            	}
            	else{
            		alert(res.data.resultMsg);
            	}
            })
        },
        events: function() {
        	var that = this;
		    $scope.changeType = function(index) {
		        $scope.type = index;
		        $scope.page=1;
		        that.getData();
		    }
		    $scope.pageChanged = function(){
		        that.getData();
		    }

        }
    }
    record.init();
}])

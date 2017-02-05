app.controller('listViewController', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {
    $scope.typeList = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧', '其它'];
    var list = {
        init: function() {
            $scope.page = 1;
            $scope.countAll = 0;
            $scope.count = 9;
            $scope.cid = 0;
            $scope.status = 0;
            $scope.timeStatus = 0;
            $scope.maxSize = 6;
            $scope.keyword = '';
            // console.log($stateParams.searchVal);
            if($stateParams.searchVal != ''){
            	console.log($stateParams.searchVal);
            	$scope.keyword = $stateParams.search;
            }
            this.getListData();
            this.events();
        },
        getListData: function() {
            $http({
                url: '/prolist',
                method: 'get',
                params: {
                    keyword: '',
                    cid: 0,
                    status: 0,
                    timeStatus: 0,
                    page: 1,
                    count: 9,
                }
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    var dataList = res.data.result;
                    $scope.dataList = dataList.list;
                    console.log(res.data.result);
                    $scope.count = dataList.count;
                    $scope.countAll = dataList.countAll;
                } else {
                    alert(res.data.resultMsg);
                }
            })
        },
        events: function() {
        	var that = this;
        	$scope.changeType = function(index){
        		$scope.cid = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.changeStatus = function(index){
        		$scope.status = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.checkTimeStatus = function(index){
        		$scope.timeStatus = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.pageChanged = function(){
        		that.getListData();
        	}
        }
    }
    list.init();
}])
app2.controller('listViewController', ['$scope', '$http','$stateParams', function($scope, $http,$stateParams) {
    $scope.typeList = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧', '其它'];
    var list = {
        init: function() {
            $scope.page = 1;
            $scope.countAll = 0;
            $scope.count = 9;
            $scope.cid = 0;
            $scope.status = 0;
            $scope.timeStatus = 0;
            $scope.maxSize = 6;
            $scope.keyword = '';
            if($stateParams.searchVal != ''){
            	$scope.keyword = $stateParams.search;
            }
            this.getListData();
            this.events();
        },
        getListData: function() {
            $http({
                url: '/prolist',
                method: 'get',
                params: {
                    keyword: '',
                    cid: 0,
                    status: 0,
                    timeStatus: 0,
                    page: 1,
                    count: 9,
                }
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    var dataList = res.data.result;
                    $scope.dataList = dataList.list;
                    console.log(res.data.result);
                    $scope.count = dataList.count;
                    $scope.countAll = dataList.countAll;
                } else {
                    alert(res.data.resultMsg);
                }
            })
        },
        events: function() {
        	var that = this;
        	$scope.changeType = function(index){
        		$scope.cid = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.changeStatus = function(index){
        		$scope.status = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.checkTimeStatus = function(index){
        		$scope.timeStatus = index;
        		$scope.page = 1;
        		that.getListData();
        	}
        	$scope.pageChanged = function(){
        		that.getListData();
        	}
        }
    }
    list.init();
}])

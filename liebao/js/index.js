var app = angular.module('myapp', []);
app.controller('ct', ['$scope', '$http', '$interval','$timeout', function($scope, $http, $interval,$timeout) {
    var index = {
        init: function() {
            this.getData();
            this.dealSlide();
        },
        getData: function() {
            $http({
                url: 'data.json',
                method: 'get'
            }).then(function(res) {
                console.log(res.data);
                if (res.data.resultCode == '0000') {
                    $scope.slideData = res.data.slideData;
                    $scope.showData = res.data.showData;
                    $scope.hotData = res.data.hotData;
                    $scope.proData = res.data.proData;
                }
            })
        },
        dealSlide: function() {
            $scope.showIndex = 0;
            var timer = '';
            timer = $interval(slideMove, 2000);
            $scope.enterFn = function(index) {
                $scope.showIndex = index;
                $interval.cancel(timer);
            };
            $scope.leaveFn = function(index) {
                timer = $interval(slideMove, 2000);
            };
            $scope.preFn = function(){
            	$interval.cancel(timer);
            	$scope.showIndex--;
            	if($scope.showIndex<0){
            		$scope.showIndex = $scope.slideData.length-1;
            	}
            	$timeout(function(){
            		timer = $interval(slideMove, 1000);
            	},2000);
            };
            $scope.nextFn = function(){
            	$interval.cancel(timer);
            	$scope.showIndex++;
            	if($scope.showIndex==$scope.slideData.length){
            		$scope.showIndex = 0;
            	}
            	$timeout(function(){
            		timer = $interval(slideMove, 2000);
            	},1000);
            }
            function slideMove(){
            	$scope.showIndex++;
                if ($scope.showIndex == 2) {
                    $scope.showIndex = 0;
                }
            }
        }
    }
    index.init();
}])

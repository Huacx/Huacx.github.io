app.controller('homeViewController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    $scope.hotArr = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧'];
    var home = {
        init: function() {
            this.getData();
        },
        getData: function() {
            var that = this;
            $http({
                url: '/IndexInfo',
                type: 'get',
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    var data = res.data.result;
                    console.log(data);

                    slideData = data.slides;
                    $scope.hotData = data.hot;
                    $scope.newData = data.new;
                    $scope.unitData = data.unit;

                    that.dealSlide(slideData);
                    that.dealNew($scope.hotData);
                    that.dealHot($scope.newData);
                    that.dealUnit($scope.unitData);
                }
            })
        },
        dealSlide: function(slideData) {
            var showIndex = 0;
            $scope.showIndex = showIndex;
            var timer = '';
            $scope.slideData = slideData;
            startMove();
            if (timer) {
                $interval.cancel(timer);
            }
            timer = $interval(startMove, 1500);

            function startMove() {
                showIndex++;
                if (showIndex == $scope.slideData.length) {
                    showIndex = 0;
                }
                $scope.showIndex = showIndex;
                $scope.imgUrl = $scope.slideData[showIndex].img;
            }
            $scope.pauseSlide = function(index) {
                $interval.cancel(timer);
                $scope.showIndex = index;
                $scope.imgUrl = $scope.slideData[index].img;
            }
            $scope.playSlide = function() {
                timer = $interval(startMove, 1500);
            }
        },
        dealHot: function(hotData) {
            $scope.hotIndex = 0;
            $scope.showHotItem = function(index) {
                $scope.hotIndex = index;
            }
        },
        dealNew: function(newData) {},
        dealUnit: function(unitData) {},
    }
    home.init();
}])
app2.controller('homeViewController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    $scope.hotArr = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧'];
    var home = {
        init: function() {
            this.getData();
        },
        getData: function() {
            var that = this;
            $http({
                url: '/IndexInfo',
                type: 'get',
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    var data = res.data.result;
                    console.log(data);

                    slideData = data.slides;
                    $scope.hotData = data.hot;
                    $scope.newData = data.new;
                    $scope.unitData = data.unit;

                    that.dealSlide(slideData);
                    that.dealNew($scope.hotData);
                    that.dealHot($scope.newData);
                    that.dealUnit($scope.unitData);
                }
            })
        },
        dealSlide: function(slideData) {
            var showIndex = 0;
            $scope.showIndex = showIndex;
            var timer = '';
            $scope.slideData = slideData;
            startMove();
            if (timer) {
                $interval.cancel(timer);
            }
            timer = $interval(startMove, 1500);

            function startMove() {
                showIndex++;
                if (showIndex == $scope.slideData.length) {
                    showIndex = 0;
                }
                $scope.showIndex = showIndex;
                $scope.imgUrl = $scope.slideData[showIndex].img;
            }
            $scope.pauseSlide = function(index) {
                $interval.cancel(timer);
                $scope.showIndex = index;
                $scope.imgUrl = $scope.slideData[index].img;
            }
            $scope.playSlide = function() {
                timer = $interval(startMove, 1500);
            }
        },
        dealHot: function(hotData) {
            $scope.hotIndex = 0;
            $scope.showHotItem = function(index) {
                $scope.hotIndex = index;
            }
        },
        dealNew: function(newData) {},
        dealUnit: function(unitData) {},

    }
    home.init();
}])

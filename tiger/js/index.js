$(function() {
    var index = {
        init: function() {
            this.dealSlide();
            this.events();
            this.scrollLiten();
        },
        events: function() {
            // 地图显示
            var maptimer = '';
            var index = 1;
            if (maptimer) {
                clearInterval(maptimer);
            }
            maptimer = setInterval(function() {
                $('.map-show>div').eq(index).show().attr('id', 'map-show' + (index + 1) + '-ani').siblings().hide().attr('id', '');
                index++;
                if (index == 3) {
                    index = 0;
                }
            }, 3000);
            // 点击切换图片
            var speed = 0;
            $('.invest-content>.lt').click(function() {
                speed -= 320;
                if (speed < -320) {
                    speed = 0;
                }
                $('.invest-content>ul').animate({ 'left': speed + 'px' });
            });
            $('.invest-content>.gt').click(function() {
                speed += 320;
                if (speed > 0) {
                    speed = -320;
                }
                $('.invest-content>ul').animate({ 'left': speed + 'px' });
            });
        },
        dealSlide: function() {
            var that = this;
            var showIndex = 0;
            var timer = '';
            startMoveFn();
            if(timer){
            	clearInterval(timer);
            }
            timer = setInterval(startMoveFn, 2000);
            function startMoveFn() {
                // 标识高亮
                $('.liList>li').eq(showIndex).addClass('active').siblings().removeClass('active');
                // 显示当前轮播
                $('.slide-bg>li').eq(showIndex).fadeIn().siblings().fadeOut();
                // 动画
                $('.slide-bg>li').eq(showIndex).find('.slide-info1').stop(true,true).animate({ 'top': '190px', 'opacity': '1' }, 1000);
                $('.slide-bg>li').eq(showIndex).find('.slide-info2').stop(true,true).animate({ 'top': '350px', 'opacity': '1' }, 1000, function() {
                    showIndex++;
                    if (showIndex >= $('.slide-bg>li').length) {
                        showIndex = 0;
                    }
                });
                // 恢复原来位置
                $('.slide-bg>li').eq(showIndex).siblings().find('.slide-info1').css({ 'top': '150px', 'opacity': '0' });
                $('.slide-bg>li').eq(showIndex).siblings().find('.slide-info2').css({ 'top': '400px', 'opacity': '0' });
            }
            $('.liList>li').hover(function() {
                clearInterval(timer);
                showIndex = $('.liList>li').index(this);
                $('.slide-bg>li').eq(showIndex).fadeIn().siblings().fadeOut();
                $('.slide-bg>li').eq(showIndex).find('.slide-info1').stop(true,true).animate({ 'top': '190px', 'opacity': '1' }, 1000)
                $('.slide-bg>li').eq(showIndex).find('.slide-info2').stop(true,true).animate({ 'top': '350px', 'opacity': '1' }, 1000, function() {});
                $('.liList>li').eq(showIndex).addClass('active').siblings().removeClass('active');
            },function(){
                timer = setInterval(startMoveFn, 2000);
                $('.slide-bg>li').eq(showIndex).siblings().find('.slide-info1').css({ 'top': '150px', 'opacity': '0' });
                $('.slide-bg>li').eq(showIndex).siblings().find('.slide-info2').css({ 'top': '400px', 'opacity': '0' });
            });
        },
        scrollLiten: function() {
            // 滚动
            $(window).scroll(function() {
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                  // 第一页
                  if(scrollTop>0){
	           		$('.explain-content>h1').attr('class', 'explain-h1-ani');
                  }
                // 第二页
                if (scrollTop >= 200) {
                    $('.explain-content>ul>li').attr('class', 'explain-li-ani');
                }
                if (scrollTop < 200) {
                    $('.explain-content>ul>li').attr('class', '');
                }
                // 第三页
                if (scrollTop >= 400) {
                    $('.share-show>img').attr('class', 'share-img-ani');
                }
                if (scrollTop < 300) {
                    $('.share-show>img').attr('class', '');
                }
                // 第四页
                if (scrollTop >= 1000) {
                    $('.share-show>.info').attr('id', 'share-info-ani');
                }
                if (scrollTop < 1000) {
                    $('.share-show>.info').attr('id', '');
                }
                // 第五页
                if (scrollTop > 1400) {
                    $('.safe-content>h2').attr('id', 'safe-h2-ani');
                    $('.safe-content>ul').attr('id', 'safe-ul-ani');
                }
                if (scrollTop < 1300) {
                    $('.safe-content>h2').attr('id', '');
                    $('.safe-content>ul').attr('id', '');
                }

                //第六页 2200
                if (scrollTop >= 2200) {
                    $('.map-info').attr('id', 'map-info-ani');
                }
                if (scrollTop < 2100) {
                    $('.map-info').attr('id', '');
                }

                // 第七页
                if (scrollTop > 2500) {
                    $('.module-content>ul>li>img').attr('id', 'module-img-ani');
                    $('.module-content>ul>li>h2').attr('id', 'module-h2-ani');
                }
                if (scrollTop < 2300) {
                    $('.module-content>ul>li>img').attr('id', '');
                    $('.module-content>ul>li>h2').attr('id', '');
                }
                //
                if (scrollTop > 3300) {
                    $('.unit-content>h2').attr('id', 'unit-h2-ani');
                    $('.unit-content>ul').attr('id', 'unit-ul-ani');
                }
                if (scrollTop < 3100) {
                    $('.unit-content>h2').attr('id', '');
                    $('.unit-content>ul').attr('id', '');
                }
            });
        }
    }
    index.init();
})

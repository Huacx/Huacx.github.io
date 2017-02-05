$(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onSlideChangeEnd: function(swiper) {
            var index = swiper.activeIndex;
            // 第一页
            if (index == 0) {
                page1init(1);
                page2init(0);
            }
            // 第二页
            if (index == 1) {
                page1init(0);
                page2init(1);
                page3init(0);
            }
            // 第三页
            if (index == 2) {
                page2init(0);
                page3init(1);
                page4init(0);
            }
            // 第四页
            if (index == 3) {
                page3init(0);
                page4init(1);
                page5init(0);
            }
            // 第五页
            if (index == 4) {
                page4init(0);
                page5init(1);
                page6init(0);
            }
            // 第六页
            if (index == 5) {
                page5init(0);
                page6init(1);
                // page7init(0);
            }
            // 第七页
            if (index == 6) {
                page6init(0);
            }
            // 第八页
            if (index == 7) {
                $('#birthday').focus(function() {
                    laydate({ elem: '#birthday' });
                });
                $('#submit').on('click', function() {
                    var reg = /^1[3578]\d{9}$/;
                    var name = $('.name').val();
                    var phone = $('.phone').val();
                    var birthday = $('#birthday').val();
                    // 判断姓名输入框
                    if (name.length <= 0) {
                        alert('请输入您的姓名！');
                        return;
                    }
                    // 判断生日输入框
                    if (birthday.length <= 0) {
                        alert('请选择您的生日！');
                        return;
                    }
                    // 判断手机号
                    if (phone.length <= 0) {
                        alert('手机号不能为空');
                        return;
                    } else if (reg.test(phone)) {
                        alert('注册成功');
                    } else {
                        alert('请输入正确手机号');
                        return;
                    }
                })
            }
        }
    });

    function page1init(n) {
        if (n == 0) {
            $('.page1>.logo').attr('class', 'logo');
            $('.page1>.text').attr('class', 'text');
            $('.page1>.bigFont').attr('class', 'bigFont');
            $('.page1>.windowFlowerRight').attr('class', 'windowFlowerRight');
        } else if (n == 1) {
            $('.page1>.logo').attr('class', 'logo logoani');
            $('.page1>.text').attr('class', 'text textani');
            $('.page1>.bigFont').attr('class', 'bigFont bigfontani');
            $('.page1>.windowFlowerRight').attr('class', 'windowFlowerRight windowFlowerRightani');
        }
    }

    function page2init(n) {
        if (n == 0) {
            $('.page2>.logo').attr('class', 'logo');
            $('.page2>.page2text').attr('class', 'page2text');
        } else if (n == 1) {
            $('.page2>.logo').attr('class', 'logo logoani');
            $('.page2>.page2text').attr('class', 'page2text page2textani');
        }
    }

    function page3init(n) {
        if (n == 0) {
            $('.cloudtext3').attr('class', 'cloudtext3');
        }
        if (n == 1) {
            $('.cloudtext3').attr('class', 'cloudtext3 cloudtext3ani');
        }
    }

    function page4init(n) {
        if (n == 0) {
            $('.eat').attr('class', 'eat');
            $('.newold').attr('class', 'newold');
            $('.page4bottomtext').attr('class', 'page4bottomtext');
            $('.chopsticks').attr('class', 'chopsticks');
        }
        if (n == 1) {
            $('.eat').attr('class', 'eat eatani');
            $('.newold').attr('class', 'newold newoldani');
            $('.page4bottomtext').attr('class', 'page4bottomtext page4bottomtextani');
            $('.chopsticks').attr('class', 'chopsticks chopsticksani');
        }
    }

    function page5init(n) {
        if (n == 0) {
            $('.page5>.le').attr('class', 'le');
            $('.page5>.page5font').attr('class', 'page5font');
            $('.page5>.page5bottomtext').attr('class', 'page5bottomtext');
        }
        if (n == 1) {
            $('.page5>.le').attr('class', 'le leani');
            $('.page5>.page5font').attr('class', 'page5font page5fontani');
            $('.page5>.page5bottomtext').attr('class', 'page5bottomtext page5bottomtextani');
        }
    }

    function page6init(n) {
        if (n == 0) {
            $('.page6border').attr('class', 'page6border');
            $('.page6logo').attr('class', 'page6logo');
            $('.page6bottomtxt').attr('class', 'page6bottomtxt');
            $('.cutimg').attr('class', 'cutimg');
        }
        if (n == 1) {
            $('.page6border').attr('class', 'page6border page6borderani');
            $('.page6logo').attr('class', ' page6logo page6logoani');
            $('.page6bottomtxt').attr('class', 'page6bottomtxt page6bottomtxtani');
            $('.cutimg').attr('class', 'cutimg cutimgani');
        }
    }
});

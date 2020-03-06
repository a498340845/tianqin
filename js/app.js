;(function ($) {
    'use strict';

    var setSlip = function () {
        var lip = $('.luowl-tab-lip'), div = $('.luowl-navs-body div:last'), panel = $('.luowl-nav-panel');
        div.addClass('am-active');
        //初始化滑块
        lip.css({
            'width': div.width() - 1,
            'left': parseInt(div.position().left) + 'px'
        });

        // 鼠标悬停
        panel.mouseenter(function () {
            //显示滑块
            if (lip.css('display') == 'none') {
                lip.show();
            }
            //移动滑块
            lip.stop().animate({
                width: $(this).width() - 1,
                left: parseInt($(this).position().left) + 'px'
            }, 300);
        }).mouseleave(function () {
            //回归滑块
            lip.stop().animate({
                width: $('.luowl-nav-panel.am-active').width() - 1,
                left: parseInt($('.luowl-nav-panel.am-active').position().left) + 'px'
            }, 500);
        });
    };
    setSlip();
    //点击
    $('.luowl-nav-panel').on('click', function () {
      $('.luowl-nav-panel').removeClass('am-active');
        $(this).addClass('am-active');
    });


    //计算mid占比
    var slider_width = ($('.luowl-mid-main').width()-20)/2 , slider_height = (($('.luowl-mid-main').width()-20)/2)/1.9;
    $('.luowl-mid-part').width(slider_width).height(slider_height);
    $('.luowl-slider').width(slider_width).height(slider_height);
    $('.luowl-sliders').width(slider_width).height(slider_height);
    $('.luowl-sliders img').width(slider_width - 20).height(slider_height - 20);
    $('.luowl-sliders img').width(slider_width - 20).height(slider_height - 20);
    $('.luowl-slider ul').width(($('.luowl-slider ul').width())/2 + slider_width/2);
    $('.luowl-mid-main').height(slider_height-70);
})(jQuery);

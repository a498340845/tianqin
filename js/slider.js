; $(function ($, window, document, undefined) {
    slider = function (container, options) {
        /*
         options = {
             auto: true,
             time: 3000,
             speed: 500,
             controller: 'className',
         }
         */
        "use strict";
        if (!container) return;
        var options = options||{},
            index = 0, // 索引
            isAuto = options.auto,// 是否自动
            controller = options.controller,// 控制器
            interval, // 自动播放器
            length = container.find('.luowl-sliders').children().length - 1;//图片的个数
        $(controller.children().eq(0)).addClass('luowl-active');

        // 切换
        var toSlider = function(index){
            console.log(index);
            $(controller.children()).eq(index).addClass('luowl-active').siblings().removeClass('luowl-active');
            $(container.find('.luowl-sliders').children()).eq(index).fadeIn(options.speed).siblings().fadeOut(options.speed);
        };
        //上一页
        function prev() {
            index--;
            if (index < 0) index = length;
            toSlider(index);
        }
        //下一页
        function next() {
            index++;
            if (index > length) index = 0;
            toSlider(index);
        }

        // 自动播放
        function play() {
            index++;
            if (index > length) index = 0;
            toSlider(index);
        }
        function autoPlay() {
            if(isAuto == true){
                interval = setInterval(play, options.time);
            }
        }
        autoPlay();

        // 鼠标悬停
        $(container).mouseenter(function () {
            clearInterval(interval);
        }).mouseleave(function () {
            autoPlay();
        });

        return {
            prev: function () {
                prev();
            },
            next: function () {
                next();
            }
        }

    };
}(jQuery, window, document));



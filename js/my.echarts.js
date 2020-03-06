;(function ($) {
    'use strict';

    //  图表
    var Fun = new func();

    // 曲线图数据展示
    var option1 = {
        title:{
            text:'曲线图数据展示',
            x:'center',
            y:'top',
            textAlign:'center'
        },
        backgroundColor: '#fff',
        legend : {
            x : 'center'
        },
        grid:{
            x:90,
            y:70,
            x2:45,
            y2:40,
            borderWidth:1
        },
        // x轴
        xAxis: {
            type: 'category',
            axisTick:{
                show:false,
            },
            boundaryGap: true,
            axisLabel:{
                interval: 1,
                show:true,
                textStyle: {
                    color: '#626262',
                    fontSize: '10',
                },
                color:'#fff'
            },
            axisLine:{
                lineStyle:{
                    width:0,
                }
            },
        },

        // y轴
        yAxis: {
            type: 'value',
            axisTick:{
                show:false,
            },
            axisLabel:{
                formatter: function(value,index){
                    return Fun.formatThousands(value) + " 人";
                },
                interval: 0,
                show:true,
                textStyle: {
                    color: '#626262',
                    fontSize: '10',
                },
                color:'#fff'
            },
            axisLine:{
                lineStyle:{
                    width:0,
                }
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dotted'  //'dotted'虚线 'solid'实线
                }
            }
        },
        series: [
            {
                type:'line',
                smooth:true,
                symbolSize : 5,
                itemStyle: {
                    borderColor:'blue',
                    normal:{
                        color: '#09b0f5',
                        lineStyle:{
                            color: '#09b0f5',
                            width:2,
                        },
                    },
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(9,176,245, 0.1)'
                        }, {
                            offset: 1,
                            color: 'rgba(9,176,245, 0.1)'
                        }])
                    }
                },
            }
        ]
    };

    // 曲线接口
    var monthUrl = 'https://edu.telking.com/api/?type=month';
    $.ajax({
        url: monthUrl,
        dataType: "json",
        success:function(res){
            option1.xAxis.data = res.data.xAxis;
            var mdata = res.data.series;
            var mSeriseData = [];
            for(var i=0;i<mdata.length;i++){
                if(i%2 === 0){
                    var mValData = {value:mdata[i], label:{show:true,color:'#09b0f5'}};
                }else{
                    var mValData = {value:mdata[i], label:{show:false}};
                }
                mSeriseData.push(mValData);
            }

            option1.series[0].data = mSeriseData;
            var chart1 = echarts.init(document.getElementById('chart1'));
            chart1.setOption(option1);
        }
    });

    // 饼状图数据展示
    var part_height = $('.luowl-mid-part').height()/3;
    var option2 = {
        title: {
            text: '饼状图数据展示',
            left:'center',
        },
        series : [
            {
                center: ["50%", "50%"],
                type: 'pie',
                radius: '60%',
            }
        ]
    };

    // 柱状图数据展示
    var option3 = {
        // 标题
        title: {
            text: '柱状图数据展示',
            left:'center',
        },
        xAxis: {},
        yAxis: {
            type: 'value',
            axisTick:{
                show:false,
            },
            axisLabel:{
                interval: 0,
                show:true,
                textStyle: {
                    color: '#626262',
                    fontSize: '10',
                },
                color:'#fff'
            },
            axisLine:{
                lineStyle:{
                    width:0,
                }
            },
            splitLine: {
                show: true,
                lineStyle:{
                    type:'dotted'  //'dotted'虚线 'solid'实线
                }
            }
        },
        // 数据
        series: [{
            name: '销量',
            type: 'bar',
            barWidth : 20,
            itemStyle: {
                borderColor:'blue',
                normal:{
                    color: '#09b0f5',
                    lineStyle:{
                        color: '#09b0f5',
                        width:2,
                    },
                },
            },
        }]
    };

    // 饼状和柱状调用接口相同  共同赋值
    var weekUrl = 'https://edu.telking.com/api/?type=week';
    $.ajax({
        url: weekUrl,
        dataType: "jsonp",
        jsonp:"callback",
        success:function(res){
            var wdata = option3.series[0].data = res.data.series, xAxis =  option3.xAxis.data = res.data.xAxis;
            var seriseData = [];
            for(var i=0;i<wdata.length;i++){
                var vdata = {value:wdata[i], name:xAxis[i]};
                seriseData.push(vdata);
            }
            option2.series[0].data = seriseData;
            // 传值
            var chart2 = echarts.init(document.getElementById('chart2'));
            chart2.setOption(option2);
            var chart3 = echarts.init(document.getElementById('chart3'));
            chart3.setOption(option3);
        }
    });

})(jQuery);

<template>
  <div id="box" style="margin:50px"> 
        <div id="progress" :style="{width: '400px', height: '200px'}"></div>
        <div class="clear"></div>
        <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
        <div id="myChart1" :style="{width: '300px', height: '300px'}"></div>
        <div id="dynamic" :style="{width: '600px', height: '500px'}"></div>
  </div>
</template>
<style scoped>
#box div{
    float: left;
}
</style>

<script>
export default {
    mounted(){
        this.drawLine()
        this.dynamic()
    },
  methods:{
      Progress(){
            var echartsdynamic = this.$echarts.init(document.getElementById('dynamic'))

            var option = {}

            echartsdynamic.setOption(option);
      },
      dynamic(){
                var data = [];
                var data1 = [];
                var timedata = [];
                var now = new Date();
                var value = Math.random() * 1000;
            function randomData() {
                    value = value + Math.random() * 100 - 10;   
                    return {
                        name: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),
                        value: [
                            now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),           
                            Math.round(value)
                        ]
                    }
                }
            function randomData1() {
                    value = value + Math.random() * 100 - 50;   
                     return {
                        name: now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),
                        value: [
                            now.getHours()+":"+now.getMinutes()+":"+now.getSeconds(),           
                            Math.round(value)
                        ]
                    }
                }
        var option = {
                // backgroundColor: '#424956',// 背景
                title: {
                    text: '请求数',  // 标题
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#F1F1F3'
                    },
                    left: '6%'
                },
                // 标识
                legend: {
                    icon: 'rect',
                    itemWidth: 12,
                    itemHeight: 5,
                    itemGap: 10,
                    data: ['移动', '电信'],
                    right: '4%',
                    textStyle: {
                        fontSize: 12,
                        color: '#292f39'
                    }
                },
                xAxis: [{
                        type: 'category',
                        splitLine: {
                            show: false
                        },
                        data: timedata
                    }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: '移动',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    areaStyle: {
                        normal: {
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    data: data
                }, {
                    name: '电信',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    areaStyle: {
                        normal: {
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        },
                    },
                    data: data1
                }  ]
            };
            var echartsdynamic = this.$echarts.init(document.getElementById('dynamic'))
            echartsdynamic.setOption(option);
            timedata.push(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
            data.push(randomData());
            data1.push(randomData());
            // setInterval(()=>{
            //         now = new Date(+now + 1000);
            //             if(timedata.length > 8){
            //                 timedata.splice(0, 1); 
            //                 timedata.push(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
            //             }else{
            //                 timedata.push(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
            //             }
            //             if(data.length > 8){
            //                 data.splice(0, 1); 
            //                 data.push(randomData());
            //             }else{
            //                 data.push(randomData());
            //             }
            //             if(data1.length > 8){
            //                 data1.splice(0, 1); 
            //                 data1.push(randomData());
            //             }else{
            //                 data1.push(randomData());
            //             }
            //             if(data1.length > 8 && data.length > 8 && timedata.length > 8){
            //                 echartsdynamic.setOption(option);
            //             }
            //     }, 3000);
           
      },
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
          var giftImageUrl = "static/logo.png"
          const option = {
            title: {
                text: '天气情况统计',
                left: 'right'
            },
              legend: {
                  orient: 'vertical',
                  x: 'right',
                  y: 'center',
                  data:['总数: 19','关机: 15','开机: 4','其他: 0']
              },
              series: [
                {
                  name: 'loading',
                  type: 'pie',
                  radius: ['65%', '66%'],
                  silent:true,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                  },
                  data:[
                      {value:19, name:'总数: 19'},
                  ]
              }, {
                  name: 'center',
                  type: 'pie',
                  radius: ['10%', '15%'],
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                  },
                  data:[
                      {value:19, name:''},
                  ]
              },{
                  type: 'pie',
                  radius: ['20%', '55%'],
                  center: ['50%', '50%'],
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                  },
                  roseType: 'radius',
                  color: ['#ec5845','#f2c955', '#46d185'],
                  data: [{
                      value: 0,
                      name: '关机: 15'
                  }, {
                      value: 4,
                      name: '开机: 4'
                  }, {
                      value: 0,
                      name: '其他: 0'
                  }],
                  animationType: 'scale',
              }]
          };
          myChart.setOption(option);
        const option1 = {
              title: {
                  subtext:"cpu",
                  x: 'center',
                  y: '30%',
                  subtextStyle:{
                      color:'#000',
                      fontSize:20,
                  }
                  
              },
              series: [{
                  name: '',
                  type: 'gauge',
                  center: ['50%', '25%'], // 默认全局居中
                  radius: '40%',
                  axisLine: {
                      show: false,
                      lineStyle: { // 属性lineStyle控制线条样式
                          color: [
                              [1, '#0193cf'],
                              [1, 'rgba(1, 147, 207, 0.3)']
                          ],
                          width: 10
                      }
                  },
                  splitLine: {
                      show: false
                  },
                  axisTick: {
                      show: false
                  },
                  axisLabel: {
                      show: false
                  },
                  pointer: {
                      show: false,
                      length: '0',
                      width: '0'
                  },
                  detail: {
                      fontSize:12,
                      formatter: '{value}%',
                      offsetCenter: [0, 0]
                  },
                  data: [{
                      value: 30,
                      label: {
                          textStyle: {
                              fontSize: 12
                          }
                      }
                  }]
              }]
          };
          myChart1.setOption(option1);
     }
  }
}
</script>

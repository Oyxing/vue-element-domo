<template>
  <div id="container" style="min-width:400px;height:400px"></div>
</template>
<script>
import Highcharts from 'highcharts'
import { elevation } from './elevation.js'
export default {
  mounted(){
      this.highcharts()
  },
  methods:{
      highcharts(){
          var elevationData = elevation
       const chart = Highcharts.chart('container', {
           animation: false,
            chart: {
                type: 'area',
            },
            //  标识
            // legend: {
			// 	layout: 'vertical',
			// 	align: 'right',
			// 	verticalAlign: 'middle'
		    // },
            title: {
                text: '2017年环法德法国第八站：Dole站'
            },
            xAxis: {
                minRange:4,
                title: {
                    text: '距离'
                }
            },
            yAxis: {
                title: {
                    text: null
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                        fillColor: {
                                linearGradient: {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 1
                                },
                                stops: [
                                        [0, Highcharts.getOptions().colors[0]],
                                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
                        },
                        lineWidth: 1,
                        threshold: null
                }
            },
            series: [{
                data: elevationData,
                name: '海拔',
            }]
       })
        console.log('chart')
        console.log(chart)
      }
  }
}
</script>

<template>
        <div class="main"> 

        </div>
</template>
<script>
export default{
    mounted(){
        this.drawLine()
    },
    methods:{
        drawLine(){
            
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.querySelector('.main'))
            console.log(document.querySelector('.main'))
            // 绘制图表
            console.log("绘制图表")
            let option = {
                        title : {
                            x:'center'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            x : 'center',
                            y : 'bottom',
                            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                magicType : {
                                    show: true,
                                    type: ['pie', 'funnel']
                                },
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        calculable : true,
                        series : [
                            {
                                name:'半径模式',
                                type:'pie',
                                radius : [30, 200],
                                roseType : 'radius',
                                label: {
                                    emphasis: {
                                        show: true
                                    }
                                },
                                data:[
                                    {value:10, name:'rose1'},
                                    {value:13, name:'rose2'},
                                    {value:15, name:'rose3'},
                                ]
                            }
                        ]
                    };
            myChart.setOption(option);
        }
    }
}
</script>
<style scoped>
.main{
    width:1000PX;
    height:calc(100% - 100px);
    margin-top:-15px;
     height:700px;
    }

</style>
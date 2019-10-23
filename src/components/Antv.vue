<template>
    <div >
        
        <canvas id="myChart" width="400" height="260" style="background:#000;"></canvas>

    </div>
</template>
<script>
const F2 = require('@antv/f2');
export default {
    mounted(){
        // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
        var data  = {
                "runnum": 2,
                "creatednum": 0,
                "exitednum": 0,
                "abnormalnum": 0
            }
        var dataarr = []
        for(var key in data){
            var namestr = ""
           if(key == "runnum"){
                namestr = "运行"
            }else if(key == "creatednum"){
                namestr = "创建"
            }else if(key == "exitednum"){
                namestr = "停止"
            }else if(key == "abnormalnum"){
                namestr = "其他"
            }
            dataarr.push({name:namestr+" "+data[key],value:data[key]})
        }
        console.log(dataarr)
        // const data = [
        //     { genre: 'Sports', sold: 275 },
        //     { genre: 'Strategy', sold: 115 },
        //     { genre: 'Action', sold: 120 },
        //     { genre: 'Shooter', sold: 350 },
        //     { genre: 'Other', sold: 150 },
        // ];

        // Step 1: 创建 Chart 对象
        const chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
        });
        chart.source(dataarr);
        chart.legend({
            position: 'right',
            marker: 'square'
        });
        chart.tooltip(false);
        chart.coord('polar', {
            transposed: true,
            radius: 0.85,
            innerRadius: 0.618
        });
        chart.axis(false);
        chart.interval().position('a*value').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
            lineWidth: 1,
            stroke: '#fff',
            lineJoin: 'round',
            lineCap: 'round'
        });

        
        chart.render();
        
    }
}
</script>




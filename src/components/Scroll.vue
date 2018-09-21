<template>
    <div style="height:200px;width:100px;position: relative;top: 30px;">
        <happy-scroll color="rgba(0,0,0,0.5)" size="5">
              <div class="con">
                  <p v-for="(item,index) in data" :key="index">
                      {{item.name}}
                  </p>
                </div>
        </happy-scroll>


        <br>
        <br>
        <br>
        <br>
        <EasyScrollbar :barOption="myBarOption">
            <div  id="wrapper" style="height: 300px;">
                <div style="height: 500px;background-color: greenyellow;text-align: center;">
                    <p v-for="(item,index) in data" :key="index">
                      {{item.name}}
                  </p>
                </div>
            </div>
        </EasyScrollbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:[],
             myBarOption:{
                barColor:"red",   //滚动条颜色
                barWidth:6,           //滚动条宽度
                railColor:"#eee",     //导轨颜色
                barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
                barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
                barOpacityMin:0.3,      //滚动条非激活状态下的透明度
                zIndex:"auto",        //滚动条z-Index
                autohidemode:true,     //自动隐藏模式
                horizrailenabled:true,//是否显示水平滚动条
            },
        }
    },
    mounted(){
        this.datapush()
    },
    methods:{
        datapush(){
            // setTimeout(()=>{
                 this.data = [
                    {name:'sadas1'},
                    {name:'sadas2'},
                    {name:'sadas3'},
                    {name:'sadas4'},
                    {name:'sadas5'},
                    {name:'sadas6'},
                    {name:'sadas7'},
                    {name:'sadas8'},
                    {name:'sadas9'},
                    {name:'sadas10'},
                    {name:'sadas11'},
                    {name:'sadas12'},
                    {name:'sadas13'},
                    {name:'sadas14'},
                    {name:'sadas15'},
                    {name:'sadas16'},
                    {name:'sadas17'},
                ]
            // },500)
          
        }
    }
}
</script>

<style>

</style>

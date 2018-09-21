<template>
    <div id="drag">
            
        <br>
        <br>
        <draggable class="draggable_cl" v-model="fruit" :options="options">
            <div v-for="(element,index) in fruit" :key="index">{{element}}</div>
        </draggable>
        <draggable  class="draggable_cl" v-model="girl" :options="options">
            <div v-for="(element,index) in girl" :key="index">{{element}}</div>
        </draggable>
        <draggable class="draggable_cl" v-model="arr" :options="options">
            <div v-for="(element,index) in arr" :key="index">{{element}}</div>
        </draggable>
        <br>
        <br>
        {{fruit}}
        <br>
        <br>
        {{girl}} 
         <br>
        <br>
        {{arr}}
        <br>
        <br>
        <el-button @click="clicksub">提交</el-button>
        
        

    </div>
</template>

<script>
var index
import draggable from 'vuedraggable'
export default {
    data(){
        return {
           options:{group:'people',animation: 6},
            fruit:['apple','banana','orage'], 
            girl:['linzhil','cjk','bdyjy'], 
            arr:["aaa","sfsf","gaa"],
            list:[
                {
                    ip:"5.5.5.5"
                },
            ],
        }
    },
    methods:{
        clicksub(){
            console.log('this.fruit')
            console.log(this.fruit)
            console.log('this.girl')
            console.log(this.girl)
            console.log('this.arr')
            console.log(this.arr)
        },
    },
    components: {
          draggable,
      },
}
</script>



<style scoped>
.draggable_cl{
    float: left;
        padding:20px 10px;
        width: 100px;
        border: 1px solid black;
        margin: 0px 10px;
}
    #dragbox1{
        width: 400px;
        height: 300px;
        border: 1px solid black;
    }
    #dragbox{
        width: 400px;
        height: 300px;
        border: 1px solid black;
    }
    #list ul li {
        width: 100px;
        height: 100px;
    }
    [v-cloak]{
    display:none;
}
#example{
    width:1000px;
    margin:0 auto;
}
.list-complete-item {
  transition: all 1s;
    height:50px;
    line-height: 50px;
    background: #000;
    color:#fff;
    text-align: center;
    font-size:24px;
    margin-top:10px;
}
.styleclass{
    width:100px;
    float:left;
}
.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}
.list-complete-sortable-chosen,.list-complete-sortable-ghost{
 opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}
.dargDiv{
    cursor:move;
    background:red;
}
.wrods{
    margin-top:50px;
}
p{
    line-height:24px;
    text-align:center;
}
</style>

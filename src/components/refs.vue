<template>
<div>
    <h2 style="margin:100px auto"> $refs父组件使用 子组件的方程</h2>
    <div @click="parentrefs" style="width:100px;background:red;height:100px;margin:10px auto">
        <h3>{{num}}</h3>
        <refschildren ref="child"></refschildren>
    </div>
</div>
    
</template>
<script>
import refschildren from './refschildren.vue'
export default{
    data(){
        return {
            num:''
        }
    },
    components: {      
        'refschildren': refschildren
    },
    methods:{
      parentrefs() {
        console.log(this) //返回的是一个vue对象，所以可以直接调用其方法
        this.num = this.$refs.child.childMethod();
      }
    },
}
</script>
<template>
    <div>
        <br><br>
        <h4>父子组件传值方式</h4>
        <span>{{dataValue}}</span>
        <input type="button" value="子向父传值" @click="faData">
        <input type="button" value="子向父传值" @click="faData1">
        <input type="button" value="父向子传值">
    </div>
</template>
<script>
export default {
    props:["dataValue"],
    created(){
    },
    methods:{
        faData(){
            this.$emit("childToFa","子向父传值");
        },
         faData1(){
            this.$emit("childToFa","子向父传值1");
        },
       
    }
}
</script>
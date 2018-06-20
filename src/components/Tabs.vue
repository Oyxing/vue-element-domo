<template>
    <div class="tabs">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="普通用户" name="first">
                <general />
            </el-tab-pane>
            <el-tab-pane label="管理员" name="second">
                <admin />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import General from './General.vue'
import Admin from './Admin.vue'
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab)
      }
    },
    components:{
        general:General,
        admin:Admin
    }
  };
</script>
<style>
.tabs{
    margin:200px auto;
    width:400px;
    min-height:100px;
    background-color:#ccc;
}
.el-tabs__item{
    width:100%;
}
</style>
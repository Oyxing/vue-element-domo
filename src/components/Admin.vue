<template>
    <div>
    <div id="qq"></div>
    <div id="ww"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="Admin用户:">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="验证码:">
                <div class="code">
                    <input type="text" class="el-input_code" v-model="formLabelAlign.code"></input>
                    <span class="eleimg"></span>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          code: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formLabelAlign);
      }
    }
  }
</script>
<style scoped>

.code{
    position: relative;
    height:36px;
}
.el-input_code{
    float: left;
    width:65%;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.eleimg{
    float: right;
    width:30%;
    height:100%;
    background-color:#0c0c0c
}
.el-form-item{
    width:95%
}
</style>
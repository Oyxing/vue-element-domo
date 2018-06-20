<template>
<el-row type="flex" class="row-bg mt20" justify="center" style="margin-top:50px">
    <el-form :rules="rules" :model="form" ref="form" label-width="80px">
        <el-form-item prop="name" label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item prop="type" label="活动性质">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item prop="desc" label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button type="danger" @click="calloff('form')">清空信息</el-button>
        </el-form-item>
    </el-form>
    </el-row>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: ['地推活动'],
          resource: '',
          desc: ''
        },
        rules:{
            name:[{required: true,message: '数量不能为空', trigger: 'blur' }],
            desc:[{required: true,message: '数量不能为空', trigger: 'blur' }],
        }
      }
    },
    methods: {
      onSubmit(form) {
          console.log(form)
           this.$refs[form].validate((valid) => {
              if (valid) {
                console.log(this.form);
                   } else {
                return false;
              }
            });
      },
      calloff(form){
          console.log(form)
         this.$refs[form].resetFields();
      }
    }
  }
</script>
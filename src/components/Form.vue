<template>
<el-row type="flex" class="row-bg mt20" justify="center" style="margin-top:50px">
    <el-form :rules="rules" :model="form" ref="form" label-width="80px" >
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
        <el-form-item prop="type" label="活动性质" >
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" >
            <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item prop="desc" label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
       <el-form-item prop="desc" label="活动形式">
            <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
            <el-button type="danger" @click="calloff('form')">清空信息</el-button>
        </el-form-item>
        <el-form-item prop="value" label="请选择文章标签">
          <el-select
            v-model="value"
            value-key="id"
            multiple
            filterable
            allow-create
            @change="changevalue"
            default-first-option
            @remove-tag="removetag"
            placeholder="请选择文章标签">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="value" label="number开关">
          <el-switch
              v-model="valueswitch"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="Number(100)"
              :inactive-value="Number(0)">
            </el-switch>
        </el-form-item>
         <el-form-item prop="value" label="number开关">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8083/api/uploading"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
    </el-form>
          
       

    </el-row>
</template>
<script>
  export default {
    data() {
      return {
         imageUrl: '',
        valueswitch:100,
        value:["1","2"],
        options:[
          {
            value:"1",
            label:"1aaaaaa"
          },
          {
            value:"2",
            label:"2bbbbbb"
          },
          {
            value:"3",
            label:"3eeeeee"
          }
        ],
        opvalue:[],
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
        newvalue:[],
        rules:{
            // name:[{required: true,message: '数量不能为空', trigger: 'blur' }],
            // desc:[{required: true,message: '数量不能为空', trigger: 'blur' }],
        }
      }
    },
    created(){
      this.getlisttag()
    },
    methods: {
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 改变数据
      changevalue(val){
        if (val.length >0){
          if (val[val.length-1].length < 10){
            this.createdoptions(val[val.length-1])
            delete this.value.splice(val.length-1,1)
          }
        }
        this.opvalue = val
      },
      // 移除标签
      removetag(val){
        if (this.newcreatedtag(val)){
          this.deltag(val)
        }
      },
      // 是否是刚创建的
      newcreatedtag(value){
          for (var i = 0;i< this.newvalue.length;i++){
            if(this.newvalue[i] == value){
              this.newvalue.splice(i-1,1)
              return true
            }
          }
          return false
      },
    
      // 创建信息
      createdoptions(label){
        this.axios.post('http://localhost:8095/tag', {
                    tagname:label,
            })
            .then((response)=> {
              this.value = []
                if (!response.data.success){
                  this.newvalue.push(response.data.data)
                  this.opvalue.push(response.data.data)
                  console.log("this.opvalue")
                  console.log(this.opvalue)
 
                  this.value = this.opvalue
                  this.getlisttag()
                }
                console.log("this.value")
                console.log(this.value)
            })
      },
      deltag(value){
         this.axios.delete('http://localhost:8095/tag/'+value)
            .then((response)=> {
                  this.getlisttag()
            })
      },
      getlisttag(){
        this.axios.get('http://localhost:8095/tag/list')
            .then( (response)=> {
                // handle success
                // this.options = response.data.data
                // this.newvalue.push(response.data)
            })
        
      },
      onSubmit(form) {
           this.$refs[form].validate((valid) => {
              if (valid) {
                          var data = {
                           Updateenddate:{
                                id:"1Oj3VFec8LMVBb5lLAbV4eJjNYc",
                                timedate:this.form.date1
                            }
                          }
                      const options = {
                              method: 'POST',
                              data:data,
                              url:"http://localhost:8091/Main/CmsApi",
                      };
                      this.axios(options)

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
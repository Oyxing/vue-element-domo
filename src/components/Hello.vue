<template>
  <div class="hello">
   <!-- <el-table :data="datanet" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="ip" label="IP" width="180">
      </el-table-column>
      <el-table-column prop="l" label="l值">
      </el-table-column>
      <el-table-column prop="m" label="m值">
      </el-table-column>
    </el-table> -->
  <wxlogin appid="wx7aa4851a39b7c99a" scope="6253ec2a794c23b9ba2e7a9fe95e5bf9" redirect_uri="redirect_uri"></wxlogin>
  <br>
  <br>
  <br>
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <model :dataValue= "h2"></model>
    <byvalue :dataValue="byData" @childToFa="faData"></byvalue>
    <div style="width:100px;height:100px;background:#ccc">
    <h2 style="fint-size:30px">
    {{h2}}
    </h2>
    </div>
    <el-button type="primary" :loading="loading" @click="loadedate">刷新</el-button>
    <el-button @click="zujian">点击我获取函数方法 </el-button>
    <el-button @click="watchjian">watch 变换的值 </el-button>
    <span>watch 变换的值{{a}}</span>
    <span v-for="(item,index) in jiaval" :key="index" >
      <el-input v-model="item.val"></el-input>
      <el-button @click="del(index)">index  {{index}}</el-button>
    </span>
    <el-button @click="jia">加</el-button><el-button @click="tijao">提交</el-button>

    <el-select
      v-model="value11"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
  </el-select>
  <br>
  <br>
  <select name="aa" size="30" style="height:100px;">
      <option value="0">1</option>
      <option value="1">2</option>
      <option value="2">3</option>
      <option value="3">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
      <option value="6">7</option>
      <option value="7">8</option>
      <option value="8">9</option>
      <option value="9">10</option>
      <option value="10">11</option>
  </select>
  </div>
</template>
<style>
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 5px;
    height: 5px;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
<script>
import Byvalue from '@/components/Byvalue'
import Model from '@/components/model'
import {myfun} from '@/assets/js/index'
import wxlogin from 'vue-wxlogin';
var i = 0
export default {
  name: 'hello',
  data () {
    return {
    options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value11: '',
       a: {name:'asda',age:'sada'},
      loading:false,
      msg: 'Welcome to Your Vue.js App',
      byData:'父传子值',
      h2:'213',
      jiaval:[
        {val:''}
        ],
      datanet:[
          {
            ip:'10.1.1.192',
            l:'lk2',
            m:'mk2'
          },
          {
            ip:'10.1.1.193',
            l:'lj3',
            m:'mj3'
          },
          {
            ip:'10.1.1.193',
            l:'li3',
            m:'mi3'
          },
          {
            ip:'10.1.1.192',
            l:'lq2',
            m:'mq2'
          },
          {
            ip:'10.1.1.192',
            l:'lp2',
            m:'mp2'
          },
          {
            ip:'10.1.1.191',
            l:'lw1',
            m:'mw1'
          },
          {
            ip:'10.1.1.191',
            l:'ly1',
            m:'my1'
          },
          {
            ip:'10.1.1.193',
            l:'lz3',
            m:'mz3'
          },
          {
            ip:'10.1.1.191',
            l:'lf1',
            m:'mf1'
          },
        ]
    }
  },

  created(){
    // myfun(this)
  },
  watch:{
     'a': 'watchjian'
  },
  methods:{
     objectSpanMethod({ row, column, rowIndex, columnIndex }) {
       console.log(rowIndex)
       if (row.ip == '10.1.1.193') {   //判断条件可以设置成你想合并的行的起始位置
          if (columnIndex === 0) {    //判断条件可以设置成你想合并的列的起始位置
            return [2, 2];
          } else if (columnIndex === 1) {
            return [1, 0];
          }
        }
       
      },
    del(index){
      // console.log(index)
    },
    tijao(){
      console.log('tag', this.value11)
      // console.log(this.jiaval)
    },
    jia(){
      this.jiaval.push({val:''})
    },
    watchjian(){
        this.a.name = i++
    },
    loadedate(){
      console.log('this父')
      console.log(this)
      this.byData="asdasd"
      this.loading = true
      setTimeout(()=>{
        this.loading = false
      },2000)
    },
    zujian(){
      // console.log("myfun")
      // console.log(myfun(this))
    },
    faData(data){
      alert(data)
    },
     
  },
   
  components:{
        wxlogin,
    byvalue:Byvalue,
    model:Model
  },
  directives:{
    row(el){
      // console.log("el")
      // console.log(el)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

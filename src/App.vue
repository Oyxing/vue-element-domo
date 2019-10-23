<template>
  <div id="app">
      <el-menu theme="dark" router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      
      <el-menu-item index="/supermap" target="_blank">
          <span>supermap</span>
        </el-menu-item>
        <el-menu-item index="/" target="_blank">
          <span>栅格</span>
        </el-menu-item>
         <el-menu-item index="markd" target="_blank">
          <span>markdown</span>
        </el-menu-item>
        <el-menu-item index="form" target="_blank">
          <span>表单</span>
        </el-menu-item>
        <el-menu-item index="teble" target="_blank">
          <span>表格</span>
        </el-menu-item>
        <el-menu-item index="carousel" target="_blank">
          <span>走马灯</span>
        </el-menu-item>
        <el-menu-item index="pitch" target="_blank">
          <span>选定</span>
        </el-menu-item>
        <el-menu-item index="pitchdisplay" target="_blank">
          <span>展示</span>
        </el-menu-item>
        <el-menu-item index="computed" target="_blank">
          <span>vue 计算属性</span>
        </el-menu-item>
         <el-menu-item index="tabs" target="_blank">
          <span>选项卡</span>
        </el-menu-item>
         <el-menu-item index="navbar" target="_blank">
          <span>导航</span>
        </el-menu-item>
        <el-menu-item index="echarttotal" target="_blank">
          <span>echarts</span>
        </el-menu-item>
        <el-menu-item index="dynamicdom" target="_blank">
          <span>动态创建 dom元素点击某一个某一个变色</span>
        </el-menu-item>
        <el-menu-item index="es6" target="_blank">
          <span>ES6</span>
        </el-menu-item>
        <el-menu-item index="refs" target="_blank">
          <span>$Refs</span>
        </el-menu-item>
        <el-menu-item index="novnc" target="_blank">
          <span>novnc</span>
        </el-menu-item>
        <el-menu-item index="Drawingboard" target="_blank">
          <span>画板</span>
        </el-menu-item>
        <el-menu-item index="vforcreatediv" target="_blank">
          <span>用v-for 生成</span>
        </el-menu-item>
        <el-menu-item index="socket" target="_blank">
          <span>socket</span>
        </el-menu-item>
        <el-menu-item index="accordion" target="_blank">
          <span>手风琴</span>
        </el-menu-item>
        <el-menu-item index="frame" target="_blank">
          <span>框架</span>
        </el-menu-item>
        <el-menu-item index="upload" target="_blank">
          <span>上传</span>
        </el-menu-item>
        <el-menu-item index="echarts" target="_blank">
          <span>echarts 画图</span>
        </el-menu-item>
        <el-menu-item index="antv" target="_blank">
          <span>antv 画图</span>
        </el-menu-item>
        <el-menu-item index="highcharts" target="_blank">
          <span>highcharts 画图</span>
        </el-menu-item>
        <el-menu-item index="divdrag" target="_blank">
          <span>拖拽</span>
        </el-menu-item>
         <el-menu-item index="scroll" target="_blank">
          <span>滚动</span>
        </el-menu-item>
        <el-menu-item index="ajax" target="_blank">
          <span>ajax</span>
        </el-menu-item>
         <el-menu-item index="map" target="_blank">
          <span>map</span>
        </el-menu-item>   
        <el-menu-item index="ueditor" target="_blank">
          <span>ueditor</span>
        </el-menu-item>
       
        <i class="iconfont icon-my-gouwuche"></i>
        </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import RFB from 'novnc-core'
import Promise from 'promise'
import { request } from 'http';
 
export default {
  name: 'app',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    created(){
      // let Web3 = require('web3');
      // let web3;
      // if (typeof web3 !== 'undefined') {
      //     web3 = new Web3(web3.currentProvider);
      // } else {
      //     // set the provider you want from Web3.providers
      //     web3 = new Web3(new Web3.providers.HttpProvider("http://10.1.1.152:8545"));
      // }
      // if(!web3.currentProvider) {
      //     web3.setProvider('http://10.1.1.152:8545');
      // }
      // console.log('web3')
      // console.log(web3.eth)
      // web3.eth.personal.newAccount('oyxing')
      // .then(console.log);
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      Novnc(){
            try {
                var rfb = new RFB({
                    'target':             document.getElementById('noVNC'),
                    'encrypt':            false,
                    'onUpdateState':      onUpdateState,
                    'onDisconnected':     onDisconnected,
                    'onPasswordRequired': onPasswordRequired,
                    'onFBResize':         onFBResize,
                    'onDesktopName':      onDesktopName,
                });
            } catch (exc) {
                    console.log('Unable to create RFB client -- ' + exc, 'error');
                    return;
            }
            //  使用给定的地址（服务器地址/主机名）创建连接 
            //  和端口（服务器上承载VNC连接的端口） 
            rfb.connect('http://localhost', '9999');
            // 连接状态改变
            function onUpdateState(rfb,state,oldstate){
                    console.log(state)
                    console.log(oldstate)
            }
            // 断开连接完成
            function onDisconnected(rfb,reason){
                 console.log(reason)
            }
            // 需要VNC密码
            function onPasswordRequired(rfb,msg){
                 console.log(msg)
            }
            // frame buffer resized
            function onFBResize(rfb,width,height){
                 console.log(width)
                 console.log(height)
            }
            // 收到的桌面名称
            function onDesktopName(rfb,name){
                 console.log(name)
            }
        }
    }
}
</script>
<style>
*{
  margin:0px;
  padding:0px;
}
a{
  text-decoration:none;
}
ul li{
  list-style:none;
}
.el-menu-item a{
  padding:20px 0px 21px 0px;
}
.el-menu-demo i{
  font-size:30px;
  line-height: 60px;
  color:#fff;
  float: right;
  margin: 0px 37px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

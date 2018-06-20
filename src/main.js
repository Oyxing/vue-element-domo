// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import Highcharts from 'highcharts'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.config.productionTip = true
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import '@/assets/css/app.css'
import VueParticles from 'vue-particles'
Vue.use(VueAxios, axios)
Vue.use(ElementUi)
Vue.use(VueJsonp)
Vue.use(Highcharts)
Vue.use(VueParticles)
import RFB from 'novnc-core'
Vue.prototype.$echarts = echarts 
import { myfun } from '@/assets/js/index'
import $ from 'jquery'
import VueSocketIO from "vue-socket-io";
import '../static/compatibility.js'
import store from './vuex/index'
/* eslint-disable no-new */
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

// Vue.use(VueSocketio, socketio('http://10.1.1.171:8080/ws/join?uname=SADAS'));
new Vue({
  el: '#app',
  router,
  store,
  $,
  RFB,
  //生成这个组件模板
  template: '<App/>',
  //定义组件
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import Highcharts from 'highcharts'
// import Vant from 'vant'
// import 'vant/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
Vue.config.productionTip = true
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import '@/assets/css/app.css'
import VueParticles from 'vue-particles'
import VueCesium from 'vue-cesium'

import VueQuillEditor from 'vue-quill-editor'
 
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor, /* { default global options } */)

// Vue-Cesium will load Cesium.js from `https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
Vue.use(VueAxios, axios)
Vue.use(ElementUi)
Vue.use(VueJsonp)
Vue.use(Highcharts)
Vue.use(VueParticles)
// Vue.use(Vant)
import VueCropper from 'vue-cropper' 

Vue.use(VueCropper)
import RFB from 'novnc-core'
Vue.prototype.$echarts = echarts
import store from './vuex/index'
import { myfun } from '@/assets/js/index'
import $ from 'jquery'
import EasyScroll from 'easyscroll';

import VueSocketIO from "vue-socket-io";

import VueSocketio from 'vue-socket.io';

import socketio from 'socket.io-client';

Vue.use(EasyScroll);
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

// Vue.use(VueSocketio, socketio('http://10.1.1.171:8080/ws/join?uname=SADAS'));
new Vue({
    el: '#app',
    router,
    store,
    metaInfo() {
        return {
          title: this.$store.state.metaInfo.title,
          meta: [
            {
              name: "keywords",
              content: this.$store.state.metaInfo.keywords
            },
            {
              name: "description",
              content: this.$store.state.metaInfo.description
            }
          ]
        };
    },
    $,
    RFB,
    //生成这个组件模板
    template: '<App/>',
    //定义组件
    components: { App }
})
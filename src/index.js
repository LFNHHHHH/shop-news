import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

// 引入 MUI 样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router'

// 按需引入 mint-ui 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

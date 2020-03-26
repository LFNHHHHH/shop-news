import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/'

// 引入 MUI 样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需引入 mint-ui 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import app from './App.vue'

import router from './router'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

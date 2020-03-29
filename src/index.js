import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vur-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/'

// 导入 moment 格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 引入 MUI 样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需引入 mint-ui 组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import app from './App.vue'

import router from './router'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

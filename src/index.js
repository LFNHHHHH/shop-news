import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vur-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true

// 注册 Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state: {
    // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象
    // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {  // 添加到购物车
      var flag = false

      state.car.some(item => {  // 判断商品是否存在，存在则更新商品数量
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      if (flag === false) {  // 商品不存在则添加商品
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var count = 0
      state.car.forEach(item => {
        count += item.count
      })
      return count
    }
  }
})

// 导入 moment 格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 引入 MUI 样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 引入 mint-ui 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 使用 vue2-preview 缩略图插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import app from './App.vue'

import router from './router'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})

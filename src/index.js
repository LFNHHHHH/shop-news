import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

import router from './router'

console.log('ok')

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

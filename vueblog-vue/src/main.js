import Vue from 'vue'
import App from './App.vue'
// 这种引入方式，非常的奇怪，怎么理解？
// 有点怪，是webpack的方式，并不具备通用性

import router from './router/index'
import store from './store/index'
import Element from 'element-ui'
import axios from 'axios'

import mavonEditor from 'mavon-editor'

import "element-ui/lib/theme-chalk/index.css"
import 'mavon-editor/dist/css/index.css'

import "./axios"
import "./permission"

Vue.use(Element)
Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

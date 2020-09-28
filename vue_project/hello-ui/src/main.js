import Vue from 'vue'
import App from './App.vue'
import routes from './routes/index.js'


Vue.config.productionTip = false


new Vue({
  
  render: h => h(App),
  router:routes,
}).$mount('#app')

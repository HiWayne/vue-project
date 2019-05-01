import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from './App.vue'
import './common/stylus/index.styl'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
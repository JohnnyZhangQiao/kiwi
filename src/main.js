import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/assets/less/common.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h=>h(App)
})

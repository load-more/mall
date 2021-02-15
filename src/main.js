import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/index"

import toast from "components/common/toast" // 自动找到index.js文件并导入

import FastClick from "fastclick"
import LazyLoad from "vue-lazyload"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

FastClick.attach(document.body)

Vue.use(LazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

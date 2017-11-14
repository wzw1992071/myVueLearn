// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "src/vuex/store"
import axios from "src/api/http"


//初始化css样式
import "normalize.css"

// 引入饿了么UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

// 引入全局的指令和过滤器
import directives from "src/directives.js"
import filters from "src/filters.js"



Vue.config.productionTip = false

// 引入封装过的axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

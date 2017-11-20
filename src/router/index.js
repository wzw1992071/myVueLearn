import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 懒加载固定写法
const Index = resolve => require(['src/pages/index/index.vue'], resolve)
const Hello = resolve => require(['src/components/Hello.vue'], resolve)

export default new Router({
  routes: [
    // 首页进去可以重定位
    {
      path:"/",
      redirect:"/index"
    },
    {
      path: '/index',
      name: 'indexPage',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
   
  ]
})

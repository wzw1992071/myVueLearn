import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Get from '@/components/Get'
// import Demo from '@/components/newInput'

Vue.use(Router)

// 懒加载固定写法
const Hello = resolve => require(['src/components/Get.vue'], resolve)
const Demo = resolve => require(['src/components/newInput.vue'], resolve)
const Get = resolve => require(['src/components/Get.vue'], resolve)
const Swiper = resolve => require(['src/components/SwiperDemo.vue'], resolve)
export default new Router({
  routes: [
    // 首页进去可以重定位
    // {
    //   path:"/",
    //   redirect:"/index"
    // },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
     {
      path: '/get',
      name: 'get',
      component: Get
    },
    {
      path: '/',
      name: 'demo',
      component: Demo
    },
    {
      path: '/swiper',
      name: 'SwiperDemo',
      component: Swiper
    }
  ]
})

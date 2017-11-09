import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Get from '@/components/Get'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/',
      name: 'Get',
      component: Get
    }
  ]
})

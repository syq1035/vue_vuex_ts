import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/main/home/index.vue'
import Shoppingcart from '../pages/main/shoppingcart/index.vue'
import Store from '../pages/main/store/index.vue'
import Main from '@/pages/main/index.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/shoppingcart',
          name: 'shoppingcart',
          component: Shoppingcart
        },
        {
          path: '/store',
          name: 'store',
          component: Store
        }
      ]
    }
  ]
})

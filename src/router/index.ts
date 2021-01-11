import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Top from '../views/Top.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/HelloWorld.vue')
  }
]

const router = new VueRouter({
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    redirect: '/shou',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/shou',
        component: () => import('../views/Shou.vue')
      },
      {
        path: '/user',
        component: () => import('../views/User.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

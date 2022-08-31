import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/home',
    redirect: '/shou',
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        path: '/shou',
        component: () => import('../views/Shou/Shou.vue')
      },
      {
        path: '/user',
        component: () => import('../views/Basis/User/User.vue')
      },
      {
        path: '/roles',
        component: () => import('../views/Basis/Roles/Roles.vue')
      },
      {
        path: '/menus',
        component: () => import('../views/Basis/Menus/Menus.vue')
      },
      {
        path: '/rank',
        component: () => import('../views/Basis/Rank/Rank.vue')
      },
      {
        path: '/job',
        component: () => import('../views/Basis/Job/Job.vue')
      },
      {
        path: '/oper',
        component: () => import('../views/Basis/Oper/Oper.vue')
      },
      {
        path: '/login-oper',
        component: () => import('../views/Basis/Login-oper/Login-oper.vue')
      },
      {
        path: '/divisional',
        component: () => import('../views/Basis/Divisional/Divisional.vue')
      },
      {
        path: '/approval',
        component: () => import('../views/WorkFlow/Approval/Approval.vue')
      },
      {
        path: '/approval-types',
        component: () => import('../views/WorkFlow/Types/Types.vue')
      },
      {
        path: '/material-ment',
        component: () => import('../views/Material/Ment.vue')
      },
      {
        path: '/firm-comm',
        component: () => import('../views/Firm/Comm.vue')
      },
      {
        path: '/lary-sheet',
        component: () => import('../views/Firm/Sheet.vue')
      },
      {
        path: '/contract',
        component: () => import('../views/Contract/Contract.vue')
      },
      {
        path: '/backlog',
        component: () => import('../views/Approve/Backlog.vue')
      },
      {
        path: '/finished',
        component: () => import('../views/Approve/Finished.vue')
      },
      {
        path: '/started',
        component: () => import('../views/Approve/Started.vue')
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

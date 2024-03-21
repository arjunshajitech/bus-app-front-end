import { createRouter, createWebHistory } from 'vue-router'

import AdminLoginView from '@/views/login/AdminLoginView.vue'
import UserLoginView from '@/views/login/UserLoginView.vue'
import BusOwnerLoginView from '@/views/login/BusOwnerLoginView.vue'
import AdminHome from '@/views/homePage/AdminHomeView.vue'
import BusOwnerHome from '@/views/homePage/BusOwnerHomeView.vue'
import UserHome from '@/views/homePage/UserHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userLogin',
      component: UserLoginView
    },
    {
      path: '/admin',
      name: 'adminLogin',
      component: AdminLoginView
    },
    {
      path: '/bus-owner',
      name: 'busOwnerLogin',
      component: BusOwnerLoginView
    },
    {
      path: '/admin/home',
      name: 'adminHome',
      component: AdminHome
    },
    {
      path: '/bus-owner/home',
      name: 'busOwnerHome',
      component: BusOwnerHome
    },
    {
      path: '/home',
      name: 'userHome',
      component: UserHome
    }
  ]
})

export default router

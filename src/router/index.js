import { createRouter, createWebHistory } from 'vue-router'
import UserLoginView from '../views/UserLoginView.vue'
import AdminLoginView from '@/views/AdminLoginView.vue'
import BusOwnerLoginView from '@/views/BusOwnerLoginView.vue'
import AdminHome from '@/components/Home/AdminHome.vue'
import BusOwnerHome from '@/components/Home/BusOwnerHome.vue'


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
    }
  ]
})

export default router

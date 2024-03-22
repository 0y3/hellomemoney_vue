import { createRouter, createWebHistory } from 'vue-router'
import Mainlayout from '@/layout/Mainlayout.vue'
import HomeView from '../views/HomeView.vue'

function loadView(view) {
  return () => import(`../views/${view}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Mainlayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            templateColor: 'blue',
            footerSize: 2
          }
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
          meta: {
            templateColor: 'blue',
            footerSize: 1
          }
        },
        {
          path: '/business-account',
          name: 'businessaccount',
          component: () => import('../views/BusinessAccountView.vue'), //loadView("BusinessAccountView"),
          meta: {
            templateColor: 'dark',
            footerSize: 2
          }
        },
        {
          path: '/business-account/multicurrency-account',
          name: 'businessaccount_multicurrencyaccount',
          component: () => import('../views/MultiCurrencyAccountView.vue'), //loadView("BusinessAccountView"),
          meta: {
            templateColor: 'dark',
            footerSize: 1
          }
        },
        {
          path: '/business-account/international-transfer',
          name: 'businessaccount_internationaltransfer',
          component: () => import('../views/InternationalTransferView.vue'), //loadView("BusinessAccountView"),
          meta: {
            templateColor: 'dark',
            footerSize: 1
          }
        }
      ]
    }
  ]
})

export default router

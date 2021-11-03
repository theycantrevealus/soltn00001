import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import Builder from '@/views/Builder.vue'
import Login from '@/views/Account/Login.vue'
import PageNotFound from '@/views/Handling/404.vue'

const NProgress = require('nprogress')
const ItWorks = {
  template: '<div>It works!</div>'
}
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Builder',
    component: Builder,
    meta: {
      requiresAuth: true
    },
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
          pageTitle: 'Dashboard',
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
      },
      {
        path: 'about',
        name: 'About',
        meta: {
          pageTitle: 'About',
          requiresAuth: true,
          breadcrumb: [
            {
              label: 'About',
              to: '/about'
            }
          ]
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      {
        path: '/core',
        name: 'Core',
        children: [
          {
            path: 'menu',
            name: 'Menu',
            meta: {
              pageTitle: 'Menu Management',
              requiresAuth: true,
              breadcrumb: [
                {
                  label: 'Menu',
                  to: 'menu'
                }
              ]
            },
            component: () => import(/* webpackChunkName: "menu.list" */ '@/views/Core/Menu.vue')
          }
        ],
        component: () => import(/* webpackChunkName: "menu" */ '@/views/Core/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!to.matched.length) {
    next('/404')
  } else {
    const isAuthed = ((<any>store.state).credential.token !== '' && (<any>store.state).credential.token !== null && (<any>store.state).credential.token !== undefined)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (isAuthed) {
        next()
        return
      }
      next('/login')
    } else {
      if (isAuthed && to.matched.some(record => record.path === '/login')) {
        next('/dashboard')
      } else {
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router

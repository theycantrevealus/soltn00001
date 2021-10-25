import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import Builder from '@/views/Builder.vue'
import Login from '@/views/Account/Login.vue'
import PageNotFound from '@/views/Handling/404.vue'

const NProgress = require('nprogress')

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
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          requiresAuth: true,
          breadcrumb: [
            {
              label: 'About',
              to: '/about'
            }
          ]
        }
      },
      {
        path: '/core',
        name: 'Core',
        children: [
          {
            path: 'menu',
            name: 'Menu',
            meta: {
              requiresAuth: true,
              breadcrumb: [
                {
                  label: 'Menu',
                  to: '/core/menu'
                }
              ]
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/Core/Menu.vue')
          }
        ],
        component: () => import(/* webpackChunkName: "about" */ '../views/Core/Index.vue')
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

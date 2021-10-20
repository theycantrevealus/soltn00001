import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import Builder from '@/views/Builder.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Account/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Builder',
    component: Builder,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthed = ((<any>store.state).credential.token !== '' && (<any>store.state).credential.token !== null && (<any>store.state).credential.token !== undefined)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthed) {
      next()
      return
    }
    next('/login')
  } else {
    if (isAuthed && to.matched.some(record => record.path === '/login')) {
      next('/home')
    } else {
      next()
    }
  }
})

export default router

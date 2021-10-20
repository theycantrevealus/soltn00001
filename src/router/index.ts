import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import Home from '@/views/Home.vue'
import Login from '@/views/Account/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true
    }
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
  const isAuthed = (<any>store.state).mAccount.credential.isAuth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthed) {
      next()
      return
    }
    next('/login')
  } else {
    if (isAuthed && to.matched.some(record => record.path === '/login')) {
      next('/login')
      return
    }

    next()
  }
})

export default router

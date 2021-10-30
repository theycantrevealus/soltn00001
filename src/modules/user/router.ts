
import { RouteRecordRaw } from 'vue-router'
const Module = () => import('@/modules/user/Module.vue')
const Index = () => import('@/modules/user/views/Index.vue')
const Add = () => import('@/modules/user/views/Add.vue')
const Edit = () => import('@/modules/user/views/Edit.vue')
const moduleRoute:Array<RouteRecordRaw> = [{
  path: '/user',
  name: 'User',
  component: Module,
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: '/user',
      name: 'UserList',
      meta: {
        pageTitle: 'User Management',
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: Index
    },
    {
      path: '/add',
      name: 'UserAdd',
      meta: {
        pageTitle: 'User Add',
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: Add
    },
    {
      path: '/edit/:uid',
      name: 'UserEdit',
      meta: {
        pageTitle: 'User Edit',
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: Edit
    }
  ]
}]
export default router => {
  router.addRoute('Builder', moduleRoute[0])
}

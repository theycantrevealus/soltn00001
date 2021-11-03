const moduleRoute = [{
  path: '/user',
  name: 'User',
  component: () => import(/* webpackChunkName: "user" */ '../user/Module.vue'),
  meta: {
    pageTitle: 'User Management Builder',
    requiresAuth: true,
    breadcrumb: [
      {
        label: 'User',
        to: '/user'
      }
    ]
  },
  children: [
    {
      path: 'list',
      name: 'UserList',
      meta: {
        pageTitle: 'User Management',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "user" */ '../user/views/Index.vue')
    },
    {
      path: 'add',
      name: 'UserAdd',
      meta: {
        pageTitle: 'User Add',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "user" */ '@/modules/user/views/Add.vue')
    },
    {
      path: 'edit/:uid',
      name: 'UserEdit',
      meta: {
        pageTitle: 'User Edit',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'User',
            to: '/user'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "user" */ '@/modules/user/views/Edit.vue')
    }
  ]
}]

export default moduleRoute

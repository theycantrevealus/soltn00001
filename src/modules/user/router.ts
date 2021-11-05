const moduleRoute = [{
  path: '/user',
  name: 'User',
  redirect: '/user/list',
  component: () => import(/* webpackChunkName: "user-container" */ '../user/Module.vue'),
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
      component: () => import(/* webpackChunkName: "user-list" */ '../user/views/Index.vue')
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
      component: () => import(/* webpackChunkName: "user-add" */ '@/modules/user/views/Add.vue')
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
      component: () => import(/* webpackChunkName: "user-edit" */ '@/modules/user/views/Edit.vue')
    }
  ]
}]

export default moduleRoute

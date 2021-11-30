const moduleRoute = [{
  path: '/master/tour',
  name: 'Master Tour',
  component: () => import(/* webpackChunkName: "master_tour" */ '@/modules/master_tour/Module.vue'),
  meta: {
    pageTitle: 'Master Tour Management Builder',
    requiresAuth: true,
    breadcrumb: [
      {
        label: 'Master Tour',
        to: '/master/tour'
      }
    ]
  },
  children: [
    {
      path: '',
      name: 'Master Tour List',
      meta: {
        pageTitle: 'Master Tour Management',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'Master Tour',
            to: '/master/tour/'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "master_tour" */ '@/modules/master_tour/views/Index.vue')
    },
    {
      path: 'add',
      name: 'Master Tour Add',
      meta: {
        pageTitle: 'Master Tour Add',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'Master Tour',
            to: '/master/tour/'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "master_tour" */ '@/modules/master_tour/views/Add.vue')
    },
    {
      path: 'edit/:uid',
      name: 'Master TourEdit',
      meta: {
        pageTitle: 'Master Tour Edit',
        requiresAuth: true,
        breadcrumb: [
          {
            label: 'Master Tour',
            to: '/master/tour/'
          }
        ]
      },
      component: () => import(/* webpackChunkName: "master_tour" */ '@/modules/master_tour/views/Edit.vue')
    }
  ]
}]

export default moduleRoute

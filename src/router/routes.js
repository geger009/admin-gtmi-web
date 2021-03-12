
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/forbidden',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/errors/MobileOnly.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/errors/Error404.vue')
  }
]

export default routes

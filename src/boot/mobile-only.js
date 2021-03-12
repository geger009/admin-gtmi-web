import { Platform } from 'quasar'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (to.path !== '/forbidden') {
      if (Platform.is.desktop) {
        next('/forbidden')
      } else {
        next()
      }
    } else {
      if (!Platform.is.desktop) {
        next('/')
      } else {
        next()
      }
    }
  })
}

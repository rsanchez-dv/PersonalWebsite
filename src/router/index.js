import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home/HomePage')
    },
    {
      path: '/cookbase',
      name: 'CookBase',
      component: () => import('@/components/Projects/ProjectsList/CookBase')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: () => import('@/components/Projects/ProjectsList/Personal')
    },
    {
      path: '/whatfits',
      name: 'Whatfits',
      component: () => import('../components/Projects/ProjectsList/Whatfits.vue')
    },
    {
      path: '/greymessaging',
      name: 'GreyMessaging',
      component: () => import('@/components/Projects/ProjectsList/GreyMessaging')
    },
    {
      path: '/cookiecoders',
      name: 'CookieCoders',
      component: () => import('@/components/Projects/ProjectsList/CookieCoders')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/Errors/404Error')
    }
  ]
})

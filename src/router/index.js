import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home/HomePage')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('@/components/Resume/Resume')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/components/Contact/Contact')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/components/Projects/Projects')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/Errors/404Error')
    }
  ]
})

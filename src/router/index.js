import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/HomePage/HomePage')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('@/components/Resume/Resume')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/components/Projects/Projects')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/404Error')
    }
  ]
})

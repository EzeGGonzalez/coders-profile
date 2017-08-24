import Vue from 'vue'
import Router from 'vue-router'
import Coders from '@/components/Coders'
import Home from '@/components/Home'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/coders',
      name: 'Coders',
      component: Coders
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Coders from '@/components/Coders'
import CoderFeedabck from '@/components/CoderFeedabck'
import AdminFeedbacks from '@/components/admin/Feedbacks'
import Auth from '@/components/Auth'
import NewUser from '@/components/NewUser'
import authHelper from '@/api/firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin/feedbacks',
      name: 'AdminFeedbacks',
      component: AdminFeedbacks
    },
    {
      path: '/coders/:id/feedback/show/:owner',
      name: 'CoderFeedback',
      component: CoderFeedabck
    },
    {
      path: '/coders/:id/feedback',
      name: 'CoderFeedback',
      component: CoderFeedabck
    },
    {
      path: '/coders',
      name: 'Coders',
      component: Coders
    },
    {
      path: '/',
      name: 'Coders',
      component: Coders
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/nuevo-usuario',
      name: 'NewUser',
      component: NewUser
    }
  ]
})

router.beforeEach((to, from, next) => {
  authHelper.authUser().then(() => {
    next()
  })
})

export default router

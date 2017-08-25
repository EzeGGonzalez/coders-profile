// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App'
import router from './router'
import store from './store'

import { auth } from '@/api/firebase'

require('./assets/sass/main.sass')

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/auth')
      }
    })
  }
})

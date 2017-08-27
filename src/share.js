import Vue from 'vue'
import store from './store'
import vueRouter from 'vue-router'

import Share from './views/share.vue'

Vue.use(vueRouter)

const routes = [
]

const router = new vueRouter({
  routes
})

const share = new Vue({
  template: '<Share/>',
  components: { Share },
  router,
  store
}).$mount('#share')
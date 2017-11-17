import Vue from 'vue'
import Router from 'vue-router'
import Mirror from '@/components/Mirror'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mirror',
      component: Mirror
    }
  ]
})

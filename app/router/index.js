import Vue from 'vue'
import Router from 'vue-router'
import Welcome from "../components/Welcome";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
      meta: {
        title: 'IsoHarmonics - Homepage'
      }
    }
  ]
})

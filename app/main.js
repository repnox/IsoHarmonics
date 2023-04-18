import Vue from 'vue'
import "vueify/lib/insert-css" // required for .vue file <style> tags
import App from './App'

import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

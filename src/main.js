import Vue from 'vue'
// import App from './App.vue'

import Layout from '@/views/layouts/index.vue'
import { createRouter } from '@/router'
import { createStore } from '@/store'

import './registerServiceWorker'

Vue.config.productionTip = false
const router = createRouter()
const store  = createStore()

new Vue({
    router,
    store,
    render: function (h) { return h(Layout) }
}).$mount('#app')

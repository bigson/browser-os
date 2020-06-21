import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vue.config.devtools = true
const debug = process.env.NODE_ENV !== 'production';
export function createStore() {
    return new Vuex.Store({
        modules: {
        },
        strict: debug,
        // strict: true,
    })
}
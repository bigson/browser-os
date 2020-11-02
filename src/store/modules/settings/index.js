import apiCategories from '@/api/categories'
import {ACTION_API_ALL} from '@/store/actions.js'
import {
    GETTER_ALL,
    GETTER_BY_KEY,

    MUTATION_SET_BY_KEY,
    MUTATION_SET_FROM_LOCAL_STORAGE,
    MUTATION_SET_FROM_SERVER,
} from '@/store/settings/const.js'

// initial state
const state = {
    settings : {

    }
    // avaiable : [],
}

// getters
const getters = {
    [GETTER_BY_KEY]: (state) => (key) => {
        if(!state.settings[key]){
            console.log('khong co', state, state.settings, key)
        }
        return state.settings[key]
    },
    [GETTER_ALL] : (state) => {
        return state.settings
    },
}

// mutations
const mutations = {
    [MUTATION_SET_BY_KEY](state, key, value){

    },
    [MUTATION_SET_FROM_LOCAL_STORAGE](state, settings) {

    },
    [MUTATION_SET_FROM_SERVER](state, settings) {

    }
}

// actions
const actions = {
    async [ACTION_LOAD]({ commit, state }) {

        return await apiCategories({}).then(function(response) {
                // console.log('after call api categories')
                // resolve(response);
                commit(MUTATION_SET_ALL, response.data.data);
            })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

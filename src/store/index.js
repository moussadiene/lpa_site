import Vue from 'vue'
import Vuex from 'vuex'

import modules from '../store/module'

import rubriques from '../store/rubrique'

import typeAnimals from '../store/typeanimal'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        modules,
        rubriques,
        typeAnimals,
    }
})

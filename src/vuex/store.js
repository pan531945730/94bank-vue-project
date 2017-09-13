import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import load from './modules/load'
export default new Vuex.Store({
  modules: {
    user,
    load
  }
})

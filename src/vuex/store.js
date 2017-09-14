import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import load from './modules/load'
export default new Vuex.Store({
  modules: {
    load
  }
})

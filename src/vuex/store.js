import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import com from './modules/com'
import user from './modules/user'

export default new Vuex.Store({
  modules: {
    com,
    user
  }
})

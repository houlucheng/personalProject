import Vue from 'vue'
import vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(vuex)

const state = {
  cartList: [],
  qq: 666
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState({
      // storage: window.sessionStorage,
      reducer(val) {
        return {
          cartList: val.cartList
        }
      }
    })]
}) 

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';  
 // * 表示将 './actions'模块中的所有接口挂载到actions对象上  as 表示别名的意思
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store;
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 666,
    studend: [
      {id: 100, name: "小明", age: 20},
      {id: 101, name: "小光", age: 30},
      {id: 102, name: "小花", age: 40},
      {id: 103, name: "小度", age: 50},
      {id: 104, name: "小猪", age: 60}
    ],
    a: "hello",
    b: "world"
  },
  mutations: {
    increnent (state) {
      state.counter ++
    },
    dcrenent (state, a) {
      console.log(a)
      state.counter --
    }
  },
  actions: {

  },
  getters: {
    content(state) {
      return state.a + state.b
    },
    more30stu(state) {
      return state.studend.filter(s => s.age>30)
    }
  },
  modules: {

  }
})

export default store
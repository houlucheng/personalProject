<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>
    <button @click="addition">加</button>
    <button @click="subtraction">减</button>
    <br>
    <em>{{$store.getters.content}}</em>
    <br>
    <em>{{$store.getters.more30stu}}</em>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex"

export default {
  name: 'App',
  data() {
    return {
      message: "我是App组件",
      counter: 0
    }
  },
  methods: {
    addition() {
      this.$store.commit('increnent')
    },
    subtraction() {
      // this.$store.commit('dcrenent', {name: 111})
      this.$store.commit({
        type: 'dcrenent',
        con: {name: 111}
      })
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
</style>

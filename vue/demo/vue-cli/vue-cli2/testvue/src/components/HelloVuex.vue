<template>
  <div>
    <p>{{num}}</p>
    <p>{{$store.state.counter}}</p>
  </div>
</template>
<script>
import {request} from "@/network/request.js"

export default {
  props: {
    counter: Number
  },
  created() {
    request({
      url: "home/multidata",
      method: "get"
    }).then(res => {
      console.log(res);
    })
  },
  computed: {
    num () {
      return this.$store.state.counter
    }
  }
}
</script>
<style scoped>
</style>
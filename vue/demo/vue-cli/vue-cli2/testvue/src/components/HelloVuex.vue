<template>
  <div>
    <p>{{num}}</p>
    <p>{{$store.state.counter}}</p>
  </div>
</template>
<script>
export default {
  props: {
    counter: Number
  },
  created() {},
  computed: {
    num () {
      return this.$store.state.counter
    }
  }
}
</script>
<style scoped>
</style>
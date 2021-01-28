<template>
  <div>
    <p>{{message}}</p>
    <button @click="clickHandl" >按钮</button>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  data() {
    return {
      message: "hello world!哈哈哈"
    }
  },
  methods: {
    clickHandl () {
      console.log('点我')
    }
  },
  components: {
    Cpn,
  }
}
</script>

<style scoped>

</style>
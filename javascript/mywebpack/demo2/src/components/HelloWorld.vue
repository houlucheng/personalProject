<template>
  <div class="hello">
  <h1>{{ msg }}</h1>
    <h1>{{ gettersMsg }}</h1>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
  //引入mapGetters
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是src/components里的helloWord.vue，我通过app.vue里的router-view展示'
    }
  },
  computed:{...mapGetters(['gettersMsg'])}
  //使用mapGetters 辅助函数
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
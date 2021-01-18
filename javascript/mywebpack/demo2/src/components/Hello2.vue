//Hello2.vue
<template>
  <div>
    <qipa1-component></qipa1-component>
    <qipa2-component></qipa2-component>
  </div>
</template>

<script>
  import qipa1Component from '@/components/qipa1Component'
  //import xxx from  '@/components/xxx' 中的@表示src
  // 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
  import qipa2Component from '@/components/qipa2Component'
export default {
components:{
  qipa1Component,
  qipa2Component
}
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
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/Home/HomeNew">走你</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>
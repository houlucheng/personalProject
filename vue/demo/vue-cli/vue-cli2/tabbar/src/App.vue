<template>
  <div id="app">
    <div id="tabbar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import "../src/assets/css/base.css";

#tabbar {
  display: flex;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
}
</style>

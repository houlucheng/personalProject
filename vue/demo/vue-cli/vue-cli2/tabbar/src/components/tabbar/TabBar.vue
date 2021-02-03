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
  name: 'tabbar',
  components: {

  }
}
</script>

<style>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>

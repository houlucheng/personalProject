<template>
  <div id="app">
    <!--把底部的导航抽离一个组件出来；-->
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>
<script>
  import Tab from "./base/Tab.vue";
  export default {
    name: 'App',
    components:{
        Tab
    }
  }
</script>

<style>
  /*如果是公共样式，最好写在App.vue 中*/
  *{
    margin:0;
    padding:0;
  }
  ul li{
    list-style:none
  }
  a{
    text-decoration: none;
  }
  /*公共轮播图样式*/
  .content{
    width:100%;
    position:absolute;
    top:40px;
    bottom:50px;
  }
</style>

<template>
  <div class="cart-list">
    <scroll class="content">
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <li>sdf</li>
      <!-- <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/> -->
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    CartListItem,
    Scroll,
  },
  activated() {
    
  },
}
</script>
<style scoped>
  .cart-list {
    height: calc(100% - 44px -49px);
    overflow: hidden;
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"/>
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
    this.$refs.scroll.refresh()
  },
}
</script>
<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
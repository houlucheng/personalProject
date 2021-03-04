<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
      <cart-list />
  </div>
</template>
<script>
import CartList from "./childComps/CartList"

import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from "vuex"

export default {
  name: 'Cart',
  computed: {
    ...mapGetters({
      cartLength: "getCartLength",
    })
  },
  components: {
    NavBar,
    CartList
  }
}
</script>
<style scoped>
  #cart {
    height: 100vh;
  }
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
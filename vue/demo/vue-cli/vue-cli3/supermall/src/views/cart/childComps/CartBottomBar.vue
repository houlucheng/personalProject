<template>
  <div class="buttom-bar">
      <div  class="check-content">
          <check-button class="check-button" />
          <span>全选</span>
      </div>

      <div class="price">
          合计：{{totalPrice}}
      </div>

      <div class="calculate">
          去计算({{checkLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

import { mapGetters } from "vuex"

export default {
  name: 'CartBottomBar',
  data() {
    return {}
  },
  computed: {
      ...mapGetters(["cartList"]),
      totalPrice() {
          return "¥" + this.cartList.filter((item) => {
              return item.checked
          }).reduce((preValue, item) => {
              return preValue + (item.price * item.count)
          },0)
      },
      checkLength() {
          return this.cartList.filter((item) => {
              return item.checked
          }).length
      }
  },
  components: {
      CheckButton
  }

}

</script>
<style scoped>
    .buttom-bar {
        height: 40px;
        background-color: #eee;
        line-height: 40px;
        position: relative;
        display: flex;
        font-size: 14px;
    }
    .check-content {
        display: flex;
        align-items: center;
        margin-left: 15px;
        width: 60px;
    }
    .check-button{
        line-height: 0px;
        margin-right: 5px;
    }
    .price {
        margin-left: 20px;
        flex: 1;
    }
    .calculate {
        width: 90px;
        background-color: red;
        color: #fff;
        text-align: center;
    }
</style>
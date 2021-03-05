<template>
  <div class="buttom-bar">
      <div  class="check-content">
          <check-button :is-checked="isSelectAll" @click.native="checkClick" class="check-button" />
          <span>全选</span>
      </div>

      <div class="price">
          合计：{{totalPrice}}
      </div>

      <div class="calculate" @click="calcClick">
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
      },
      isSelectAll() {
        if(this.cartList.length == 0) return false
        // return !(this.cartList.filter(item => !item.checked).length)
        return !this.cartList.some(item => item.checked == false)

      }
  },
  methods: {
    calcClick() {
      if(!this.checkLength){
        this.$toast.show("请选择结算的商品")
      }
    },
    checkClick() {
      if(this.isSelectAll) { // 全部选中
        this.cartList.forEach(item => item.checked = false)
      }else { // 全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
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
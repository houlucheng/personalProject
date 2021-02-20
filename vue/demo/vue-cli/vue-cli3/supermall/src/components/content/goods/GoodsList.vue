<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item" :key="item.iid" />
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem"

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.goods)
  },
  components: {
    GoodsListItem
  }

}
</script>
<style scoped>
    .goods {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
    }
</style>
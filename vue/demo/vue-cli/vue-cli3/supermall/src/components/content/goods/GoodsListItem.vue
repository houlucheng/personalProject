<template>
  <div class="goods-item">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .goods-item {
    padding-bottom:40px;
    width: 48%;
    box-sizing: border-box;
    position: relative;
  }
  .goods-item>img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
    font-size: 13px;
  }
  .goods-info p {
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    color: var(--color-high-text);
  }
  .collect::before {
    display: inline-block;
    content: "";
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    margin:0 1px 0 3px;
  }
</style>
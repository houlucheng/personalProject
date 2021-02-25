<template>
  <div class="detail-wrap">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

import {getDetail, Goods, Shop} from "network/detail"

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetail()
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then((res) => {
        console.log(res.result);
        const data = res.result
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  }
}
</script>
<style scoped>
  .detail-wrap {
    padding-bottom: 50px;
  }
</style>
<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info :paramInfo="paramInfo" />
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import Scroll from 'components/common/scroll/Scroll'
import {debounce} from "common/utils"

import {getDetail, Goods, Shop, GoodsParam} from "network/detail"

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetail()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300)
    this.$bus.$on('imageLoad', () => {
      refresh()
    })
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then((res) => {
        console.log(res.result);
        const data = res.result
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo
  }
}
</script>
<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 10;
    background-color: #fff;
    position: relative;
  }
  .detail-nav {
    position: relative;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
  }
</style>
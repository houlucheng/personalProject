<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick"  v-show="isShowBackTop" />
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import {itemListenerMixin, backTopMinxin} from 'common/mixin'

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail"

import { mapActions } from "vuex"

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
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: "",
    }
  },
  created() {
    this.iid = this.$route.params.iid
    this.getDetail()
    this.getRecommend()
  },
  mixins: [itemListenerMixin, backTopMinxin],
  mounted() {
    // this.refresh = debounce(this.$refs.scroll.refresh, 300)
    // this.$bus.$on('imageLoad', () => {
    //   this.refresh()
    // })
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },
  methods: {
    ...mapActions(["addCart"]),
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.detailInfo.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.addCart(product).then(res => {
        this.$toast.show(res)
      })

      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // })
    },
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0;  i<length-1; i++){
        // if(this.currentIndex != i && (i < length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length -1 && positionY >= this.themeTopYs[i])){
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        // 简单写法 [0, 1000, 2000, 3000, 4000]
        if(this.currentIndex != i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      // 回到顶部
      this.isShowBackTop = (-position.y) > 1000
    },
    imageLoad() {
      this.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300)
    },
    getDetail() {
      getDetail(this.iid).then((res) => {
        const data = res.result
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        if(data.rate.cRate != 0){
          this.commentInfo = data.rate.list[0]
        }
        /*
          this.$nextTick(() => {
            // 根据最新的数据，对应的DOM已经被渲染出来
            // 但是图片依然没有加载完（目前获取到的offsetTop不包含图片）
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.param.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recomend.$el.offsetTop)
          })
        */
      })
    },
    getRecommend() {
      getRecommend().then( (res) => {
        this.recommends = res.data.list
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
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  }
}
</script>
<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .content {
    overflow: hidden;
    height: calc(100% - 99px);
    /* position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    bottom: 0; */
  }
</style>
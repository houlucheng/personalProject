<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control v-show="isTabFixed" ref="tabControl1" class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
    <keep-alive>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
        <recommend-view :recommends="recommends" />
        <feature-view></feature-view>
        <tab-control ref="tabControl2" class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
        <goods-list :goods="showGoods" />
      </scroll>
    </keep-alive>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"
import {debounce} from "common/utils"

import {getHomeMultidata, getHomeGoods} from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      currentPosition: 0
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods("new")
    this.getHomeGoods("sell")

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 300)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
    
  },
  methods: {
    activated() {
      
    },
    deactivated() {
      
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      console.log((-position.y) >= this.tabOffsetTop);
      this.isTabFixed = ((-position.y) >= this.tabOffsetTop)
      this.currentPosition = (-position.y)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp();
      })
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }
}
</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }
  .tab-control {
    /* 原生吸顶 */
    /* position: sticky; */
    /* top: 44px;
    z-index: 9; */

    position: relative;
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  }
</style>
<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />
    <ul>
      <li>hello1</li>
      <li>hello2</li>
      <li>hello3</li>
      <li>hello4</li>
      <li>hello5</li>
      <li>hello6</li>
      <li>hello7</li>
      <li>hello8</li>
      <li>hello9</li>
      <li>hello10</li>
      <li>hello11</li>
      <li>hello12</li>
      <li>hello13</li>
      <li>hello14</li>
      <li>hello15</li>
      <li>hello16</li>
      <li>hello17</li>
      <li>hello18</li>
      <li>hello19</li>
      <li>hello20</li>
      <li>hello21</li>
      <li>hello22</li>
      <li>hello23</li>
      <li>hello24</li>
      <li>hello25</li>
      <li>hello26</li>
      <li>hello27</li>
      <li>hello28</li>
      <li>hello29</li>
      <li>hello30</li>
      <li>hello31</li>
      <li>hello32</li>
      <li>hello33</li>
      <li>hello34</li>
      <li>hello35</li>
      <li>hello36</li>
      <li>hello37</li>
      <li>hello38</li>
      <li>hello39</li>
      <li>hello40</li>
      <li>hello41</li>
      <li>hello42</li>
      <li>hello43</li>
      <li>hello44</li>
      <li>hello45</li>
      <li>hello46</li>
      <li>hello47</li>
      <li>hello48</li>
      <li>hello49</li>
      <li>hello50</li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl"

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
      }
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page
      getHomeGoods(type,page).then(res => {
        console.log(res);
      })
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  }
}
</script>
<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
<template>
  <div class="wrapper" ref="aa">
    <ul>
      <li>你好1</li>
      <li>你好2</li>
      <li>你好3</li>
      <li>你好4</li>
      <li>你好5</li>
      <li>你好6</li>
      <li>你好7</li>
      <li>你好8</li>
      <li>你好9</li>
      <li>你好10</li>
      <li>你好11</li>
      <li>你好12</li>
      <li>你好13</li>
      <li>你好14</li>
      <li>你好15</li>
      <li>你好16</li>
      <li>你好17</li>
      <li>你好18</li>
      <li>你好19</li>
      <li>你好20</li>
      <li>你好21</li>
      <li>你好22</li>
      <li>你好23</li>
      <li>你好24</li>
      <li>你好25</li>
      <li>你好26</li>
      <li>你好27</li>
      <li>你好28</li>
      <li>你好29</li>
      <li>你好30</li>
      <li>你好31</li>
      <li>你好32</li>
      <li>你好33</li>
      <li>你好34</li>
      <li>你好35</li>
      <li>你好36</li>
      <li>你好37</li>
      <li>你好38</li>
      <li>你好39</li>
      <li>你好40</li>
      <li>你好41</li>
      <li>你好42</li>
      <li>你好43</li>
      <li>你好44</li>
      <li>你好45</li>
      <li>你好46</li>
      <li>你好47</li>
      <li>你好48</li>
      <li>你好49</li>
      <li>你好50</li>
      <li>你好51</li>
      <li>你好52</li>
      <li>你好53</li>
      <li>你好54</li>
      <li>你好55</li>
      <li>你好56</li>
      <li>你好57</li>
      <li>你好58</li>
      <li>你好59</li>
      <li>你好60</li>
      <li>你好61</li>
      <li>你好62</li>
      <li>你好63</li>
      <li>你好64</li>
      <li>你好65</li>
      <li>你好66</li>
      <li>你好67</li>
      <li>你好68</li>
      <li>你好69</li>
      <li>你好70</li>
      <li>你好71</li>
      <li>你好72</li>
      <li>你好73</li>
      <li>你好74</li>
      <li>你好75</li>
      <li>你好76</li>
      <li>你好77</li>
      <li>你好78</li>
      <li>你好79</li>
      <li>你好80</li>
      <li>你好81</li>
      <li>你好82</li>
      <li>你好83</li>
      <li>你好84</li>
      <li>你好85</li>
      <li>你好86</li>
      <li>你好87</li>
      <li>你好88</li>
      <li>你好89</li>
      <li>你好90</li>
      <li>你好91</li>
      <li>你好92</li>
      <li>你好93</li>
      <li>你好94</li>
      <li>你好95</li>
      <li>你好96</li>
      <li>你好97</li>
      <li>你好98</li>
      <li>你好99</li>
      <li>你好100</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll"

export default {
  name: "category",
  mounted() {
    // new BScroll('.wrapper', {})
    // new BScroll(document.querySelector(".wrapper"), {})
    const bscroll = new BScroll(this.$refs.aa, {
      probeType: 0,
      // 0 和 1 代表不允许监听滚动
      // 2 滚动时监听滚动位置 但是手指离开滚动区域时就算有惯性继续滚动着也不会再监听滚动位置
      // 3 只要是滚动都监听
      click: true, // 默认false 在wrapper元素中click不起作用
      pullUpLoad: true, // 监听上拉加载
    })

    // 监听滚动
    bscroll.on('scroll', (position) => {
      console.log(position);
    })
    // 监听上拉加载
    bscroll.on('pullingUp', () => {
      console.log('上拉加载');
      setTimeout(()=>{
        bscroll.finishPullUp(); // 如果不执行这个方法那么上拉加载只会触发一次
      },2000)
    })

  },
}
</script>
<style scoped>
  .wrapper {
    height: 300px;
    background-color: #673;
    overflow: hidden;
  }
</style>
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
 import BScroll from "better-scroll"

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    // 上拉加载
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    })
    // window.addEventListener('load', () => {
    //   this.scroll.refresh()
    // })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh()
    }
  },

}

</script>
<style scoped>
</style>
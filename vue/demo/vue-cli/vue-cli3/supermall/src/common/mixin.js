import {debounce} from "common/utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 300)
    // const refresh = debounce(this.$refs.scroll.refresh, 300)
    this.itemImageListener = () => {this.refresh()}
    this.$bus.$on('itemImageLoad', this.itemImageListener)
  }
}

export const backTopMinxin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      console.log("回到顶部")
      this.$refs.scroll.scrollTo(0,0)
    },
  },
  components: {
    BackTop
  }
}
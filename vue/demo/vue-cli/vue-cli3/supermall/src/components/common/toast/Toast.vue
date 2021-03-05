<template>
  <div class="toast" v-show="isShow" >
    <div>{{message}}</div>
  </div>
</template>
<script>
import { throttle } from "common/utils"

export default {
  name: 'Toast',
  props: {
    // message:{
    //   type: String,
    //   default: ""
    // },
    // show: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      isShow: false,
      message: "",
      showHandl: null
    }
  },
  mounted() {
  },
  methods: {
    show(message="默认文字", duration=3000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ""
      }, duration)
    }
  },
}
</script>
<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 999;

    color: #fff;
    background: rgba(0, 0, 0, .6);
    padding: 8px 20px;
    font-size: 13px;
    border-radius: 2px;
  }
</style>
<template>
  <div>
    <h2>我的</h2>
    <p>我的，嘿嘿嘿</p>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.$route.params)
  },
}
</script>
<style scoped>
</style>
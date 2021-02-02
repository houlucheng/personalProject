<template>
  <div>
    <h2>我是profile</h2>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.query.name)
  },
}
</script>
<style scoped>
</style>
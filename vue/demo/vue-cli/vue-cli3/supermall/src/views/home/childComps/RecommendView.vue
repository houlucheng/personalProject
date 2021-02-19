<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  width: 100%;
  padding: 10px 0 20px;
  display: flex;
  border-bottom: 8px solid #eee;
}
.recommend-item{
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.recommend-item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
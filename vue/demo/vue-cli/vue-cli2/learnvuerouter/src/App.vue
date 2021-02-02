<template>
  <div id="app">
    <h2>我是App组件</h2>
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link>
    <router-link :to="'/User/' + userId" tag="button" replace>我的</router-link>
    <router-link :to="{path: '/Profile', query: {name: '666'}}" replace>档案</router-link>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="profileClick">档案</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: "111"
    }
  },
  methods: {
    homeClick () {
      // this.$router.push("/Home")
      this.$router.replace("/Home")
      console.log(this.$router)
    },
    aboutClick () {
      // this.$router.push("/About")
      this.$router.replace("/About")
    },
    profileClick () {
      this.$router.push({
        path: "/Profile",
        query: {
          name: 999
        }
      })
    }
  },
}
</script>

<style>
  .active {
    color: #f00;
  }
</style>

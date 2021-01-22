<template>
    <div class="box">
        <router-link :to="{name:'qq'}" tag="button">文章页</router-link>
        <router-link :to="{name:'ww'}" tag="button">子页面</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    },
}
</script>

<style scoped>
.box{
    width: 500px;
    height: 400px;
    border-radius: 5px;
    border: 1px solid rebeccapurple;
}
</style>

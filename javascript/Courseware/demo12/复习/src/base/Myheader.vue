<template>
	<div class="header">
		<i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>		
		<slot></slot>
	</div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {}
        },
        props:["back"],
        methods: {
        		goBack(){
        			this.$router.back(-1);
        		}
        },
        components: {},
        computed: {}
    }
</script>

<style scoped>
	.header{
		position: fixed;
		width: 100%;
		background-color: #00FFFF;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 20px;
	}
	.icon-fanhui{
		position: absolute;
		left: 10px;
	}
</style> 
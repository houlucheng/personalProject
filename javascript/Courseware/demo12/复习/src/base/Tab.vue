<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-chazhaobiaodanliebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjia-xue"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="less">
	.footer{
		position: fixed;
		width: 100%;
		bottom: 0;
		display: flex;
		border-top: 1px solid #ccc;
		
	}
	a{
		display:flex;
		flex: 1;
		flex-direction:column;/*上下式排列*/
		font-size: 18px;
		align-items: center;/*水平居中*/
		color: #90EE90;
	}
	.iconfont{
		font-size: 25px;
	}
	/*显示哪个路由哪个路由就有这个类 固定的类*/
	.router-link-active{
		color: red;
	}
</style>

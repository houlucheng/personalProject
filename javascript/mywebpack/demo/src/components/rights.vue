<template>
	<div class="user_rights">
					<p>100+记者<br> 
						80+国内外新闻奖 <br> 
						10000+独家重磅报道   
					</p>
					<p>
						财新通整合财新网、财新周刊<br>
						双端付费阅读资讯<br>
						支持全平台阅读  <br>
						畅读财新网+周刊百万余篇稿件
					</p>
					<ul>
						<li>
							<span>
								每日<br>新闻
							</span>
							<i>原创、专业、高质量的新闻报道，7×24小时不停歇</i>
						</li>
						<li>
							<span>
								深度<br>特搞
							</span>
							<i>久经考验的调查新闻团队，揭开时间背后的逻辑、故事与玄机</i>
						</li>
						<li>
							<span>
								试听<br>服务
							</span>
							<i>新闻朗读功能、音频和视频节目，丰富的视听体验</i>
						</li>
						<li>
							<span>
								报道<br>资料库
							</span>
							<i>轻松搜索和查阅财新历年来的文字、图片、视听报道</i>
						</li>
					</ul>
				</div>
</template>

<script>
	export default {
		name:'userRights'
	}
</script>

<style scoped>
.user_rights {
    width: 7.5rem;
    height: 12.4rem;
    background: url(../assets/img/explain_02.png) no-repeat;
    background-size: 100%;
    margin-top: -0.02rem;
    padding-left: 1.07rem;
    padding-top: 1.8rem;
    line-height: 0.55rem;
    box-sizing: border-box;
}
.user_rights p:nth-of-type(1) {
    font-size: 0.4rem;
    color: #ac8f57;
    font-weight: 900;
}
.user_rights p:nth-of-type(2) {
    font-size: 0.29rem;
    color: #303131;
    font-weight: 200;
}
.user_rights ul {
    margin-top: 0.4rem;
    margin-bottom: 0.45rem;
}
.user_rights ul li {
    width: 5.29rem;
    height: 1.41rem;
    border: 0.01rem solid #434343;
    box-sizing: border-box;
    margin-bottom: 0.09rem;
}
.user_rights ul li span {
    display: table-cell;
    float: left;
    display: block;
    text-align: center;
    font-size: 0.3627rem;
    color: #ffff;
    width: 1.22rem;
    height: 1.41rem;
    background-color: #e74f00;
    line-height: 0.4rem;
    font-weight: 900;
    padding-top: 0.35rem;
    margin-top: -0.01rem;
    margin-left: -0.01rem;
    box-sizing: border-box;
}
.user_rights ul li i {
    display: table-cell;
    width: 4.06rem;
    height: 1.39rem;
    font-style: normal;
    font-size: 0.26rem;
    font-weight: 200;
    padding-left: 0.16rem;
    box-sizing: border-box;
    line-height: 0.37rem;
    vertical-align: middle;
}
</style>
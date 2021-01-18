<template>
	<div class="Discount">
		<h2>财新通周年庆福利升级！</h2>
		<h5>11月1日至11月12日期间购买或续订财新通，即可获赠2个月权限，</h5>
		<p>更有价值万元实物礼品等你来领！<br>在财新，</p>
		<div class="discount_btn">
			<p>
				一起看靠谱的新闻，<br>
				一起读懂中国经济！
			</p>
			<p>
				<span class="discoun_text">
					<img src="../assets/img/youhui.png">
				</span>
				<a href="javascript:;" class="purchase" @click="purchase()">立即购买</a>
			</p>
		</div>
	</div>


</template>

<script>
	export default {
		name:'Discount',
		props:['getCookie'],
		data(){
			return {
				Url:'http://mall.caixin.com/mall/web/product/product.html?id=733&backUrl=',
				ele:'',
				eleTwo:''
			}
		},
		mounted(){
			this.ele = document.getElementsByClassName('share_con')[0];
			this.eleTwo = document.getElementsByClassName('share')[0];
		},
		methods:{
			purchase(){
				if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&this.getCookie("appType")) {
					this.ele.classList.remove('hide');
					this.eleTwo.classList.remove('hide');
					return false;
				}else if (/(Android)/i.test(navigator.userAgent)&&this.getCookie("appType")) {
				    window.location.href='rights://showQZSFRights?';
				    return false;
				}
				window.location.href=this.Url+encodeURIComponent(window.location.href) 
			}
		}
	}
</script>

<style scoped>
.Discount {
    width: 5.77rem;
    margin: 0 auto;
    line-height: 0.52rem;
    display: block;
}
.Discount h2 {
    font-size: 0.36rem;
    color: #313131;
}
.Discount h5 {
    font-size: 0.2915rem;
    color: #e74f00;
}
.Discount>p, .discount_btn>p {
    font-size: 0.2915rem;
    color: #313131;
}
.discount_btn {
    overflow: hidden;
}
.discount_btn>p {
    float: left;
}
.discoun_text {
    display: inline-block;
}
.discoun_text img {
    width: 0.29rem;
    vertical-align: middle;
}
.purchase {
    display: inline-block;
    width: 2.17rem;
    height: 0.89rem;
    background-color: #e74f00;
    font-size: 0.2915rem;
    text-align: center;
    line-height: 0.89rem;
    color: #ffffff;
}
</style>
<template>
	<div class="LuckDraw">
		<div class="LuckDraw_con">
			<div class="pan" id="pan">
				<img src="../assets/img/turntable.png" alt="">
			</div>
			<div class="sim" id="go"></div>
			<img class="gift" src="../assets/img/gift.png">
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'LuckDraw',
		
	}
</script>

<style scoped>
.LuckDraw {
    width: 100%;
    height: 8rem;
    margin: 0 auto;
    padding-top: 0.78rem;
    box-sizing: border-box;
}
.LuckDraw_con {
    width: 7.5rem;
    height: 7.5rem;
    overflow: hidden;
    background-image: url(../assets/img/turntable_bg.png);
    background-size: 100% 100%;
    position: relative;
}
.pan {
    width: 5.84rem;
    height: 5.84rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2.92rem;
    margin-left: -2.92rem;
    -webkit-transition: 5s transform cubic-bezier(0.48, 0.02, 0.17, 1);
}
.pan img {
    border-radius: 50%;
    width: 100%;
}
.sim {
    width: 2.5rem;
    height: 2.5rem;
    background: url(../assets/img/pointer.png) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1.2rem 0 0 -1.2rem;
}
.gift {
    width: 1.02rem;
    height: 1.67rem;
    position: absolute;
    bottom: 0.5rem;
    right: 0.6rem;
    display: none;
}
</style>
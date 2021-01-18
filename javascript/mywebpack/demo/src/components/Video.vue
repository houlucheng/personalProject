<template>
	<div class="video">
		<div class="video_con" id="aa">
		
		</div>
	</div>
</template>

<script>
	export default {
		name:"Video",
		methods:{
			fn(){
				var player = new CloudVodPlayer();
				player.init({
					"uu": "kd9ksjef36",
					"vu": "eb697e65f9",
					"pu": "26012e9127",
					"auto_play": 0,
					"gpcflag": 1,
					"width": '5.96rem',
					"height": '3.35rem',
					"lang": "zh_CN"
				},'aa');
			}
		},
		mounted(){
			this.fn()
		}
	}
</script>

<style scoped>
.video {
    width: 6.53rem;
    height: 4.32rem;
    margin: 0.3rem auto 0;
    background-image: url(../assets/img/video.png);
    background-size: 100% 100%;
    overflow: hidden;
}
.video_con {
    width: 5.96rem;
    height: 3.35rem;
    margin: 0.17rem auto 0;
    overflow: hidden;
}
</style>
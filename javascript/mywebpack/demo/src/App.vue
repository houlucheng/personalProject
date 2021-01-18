<template>
  <div id="app">
  	<div class="share_con hide" @click="hide()"></div>
  	<img class="share hide" src="./assets/img/share.png">
  	<HelloWorld></HelloWorld>
	<img class="banner" src="./assets/img/banner.png"/>
	<Video></Video>
	<Discount :getCookie='getCookie' :ele='ele' :eleTwo='eleTwo'></Discount>
	<LuckDraw></LuckDraw>
	<div id="occupy"></div>
	<Antrod></Antrod>
	<Right></Right>
	<description></description>
	<div id="box">
		<div id="prize_id" hidden="hidden"></div>
	</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Video from './components/Video';
import Discount from './components/Discount';
import LuckDraw from './components/LuckDraw';
import Antrod from './components/Anniver_introd';
import Right from './components/rights';
import description from './components/description';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Video,
    Discount,
    LuckDraw,
    Antrod,
    Right,
    description
  },
  data(){
  	return {
  		ele:'',
  		eleTwo:''
  	}
  },
  mounted(){
		this.ele = document.getElementsByClassName('share_con');
		this.eleTwo = document.getElementsByClassName('share');
  },
  methods:{
  	getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        } else {
            return null;                
        }
    },
    hide(){
    		this.ele.classList.add('hide')
		this.eleTwo.classList.add('hide')
    }
  }
}
</script>

<style>
#app{
	width: 7.5rem;
	margin: 0 auto;	
	overflow: hidden;
    position: relative;
    background: url(./assets/img/wrap_bg.png) no-repeat;
    background-size: 100%;
}
.banner{
	width: 100%;
}
#occupy {
    width: 100%;
    height: 1rem;
}
#box {
    height: 1rem;
}
.share_con {
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    text-align: center;
}
.share {
    width: 5.21rem;
    position: fixed;
    top: 0.1rem;
    left: 50%;
    z-index: 10;
    margin-left: -2.605rem;
}
.hide {
    display: none;
}
</style>

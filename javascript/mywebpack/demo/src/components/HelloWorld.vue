<template>
 	<div class="nav">
 		<ul>
 			<li v-for="i in arr"><a href="#wer">{{i}}</a></li>
 		</ul>
 	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: ['活动主页','我要抽奖','周年献礼','活动说明']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	width: 7.03rem;
    height: 0.58rem;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 6;
    margin-left: -3.51rem;
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: 0 0.05rem 0.2rem #78878d;
    overflow: hidden;
}
.nav ul {
    width: 100%;
    height: 100%;
    font-size: 0.23rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
.nav ul li {
    width: 25%;
    height: 0.45rem;
    line-height: 0.45rem;
    border-right: 0.01rem solid #bfbfbf;
}
.nav ul li a {
    color: #434343;
}
</style>

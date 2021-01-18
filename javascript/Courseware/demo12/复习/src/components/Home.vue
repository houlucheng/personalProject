<template>
    <div>
        <Myheader>首页</Myheader>
        <div class="content">
            <Swiper :sliders="sliders"></Swiper>
            <div class="container">
                <h3>热门图书</h3>
                <ul>
                		<li v-for="item in hotBooks" >
                			<img :src="item.bookCover"/>
                			<b>{{item.bookName}}</b>
                		</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Myheader  from "../base/Myheader.vue";
    import Swiper from "../base/Swiper.vue";
    import {getSlider,getHot}  from  "../api/index.js"
    export default {
        data(){
            return {
                sliders:[],
                hotBooks:[]
            }
        },
        created(){
            /*getSlider().then(function (data) {
              console.log(data);
            })*/
            //  async  await;
          this.slide();
          this.hotBook();

        },
        methods: {

            // async  用来处理异步的请求结果；promise；
            async slide(){
                this.sliders = await getSlider();
            },
            async hotBook(){
                this.hotBooks = await getHot();
            }
        },
        components: {Myheader,Swiper},
        computed: {}
    }
</script>

<style scoped>
.container{
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .container h2{
    padding-left:30px;
  }
  .container ul li{
    margin-top:20px;
    width:50%;
    float:left;
    margin-bottom: 20px;
  }
  .container ul li img{
    display: block;
  }
  .container ul li b{
    display: block;
    padding-left:20px;
  }
</style>

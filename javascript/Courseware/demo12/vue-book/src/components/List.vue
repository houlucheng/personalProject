<template>
    <div>
      <Myheader :back="true">列表页</Myheader>
      <div class="content">
         <ul class="container">
           <li v-for="book in allBooks">
             <img :src="book.bookCover" alt="">
             <div class="right">
                <h3>{{book.bookName}}</h3>
                <p>{{book.bookInfo}}</p>
                <p class="price">{{book.bookPrice}}</p>
                <button class="btn" @click="remove(book.bookId)">删除</button>
                <button class="btn">收藏</button>
             </div>
           </li>
         </ul>
      </div>
    </div>
</template>

<script>
    // 默认导出一个对象
    import Myheader from "../base/Myheader.vue";
    import {getAll,deleteBook} from "../api/index.js";
    export default {
        data(){
            return {
                allBooks :[]
            }
        },
        created(){
            this.getAllBooks();
        },
        methods: {
            // 获取所有的图书；
            async getAllBooks(){
                this.allBooks = await getAll();
               console.log(this.allBooks);
            },
            remove(id){
                // 后端删除数据
               deleteBook(id);
               // 改变当前的数据；
               this.allBooks = this.allBooks.filter((item)=>item.bookId !=id);
            }
        },
        components: {Myheader},
        computed: {}
    }
</script>

<style scoped>
  .container li img{
    width:160px;
  }
  .container li{
    padding:10px;
    font-size: 16px;
  }
  .right{
    width:180px;
    float:right;
  }
  .price{
    color:red;
    font-size: 30px;
  }
  .btn{
    width:60px;
    height:30px;
    background: red;
    color:white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
  }

</style>

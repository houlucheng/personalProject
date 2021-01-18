import  Vue from "Vue";
import  App from "./App.vue";

// 如果自定义文件下的js是index.js,那么可以省略；
//import router from './router'
import router from './router/index.js'
new Vue({
    el:"#app",
    components:{App},
    router,
    render:h=>h(App)
});

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
import Home from "../components/Home.vue";
import List from "../components/List.vue";
import Add from "../components/Add.vue";
import Detail from "../components/Detail.vue";
import Collect from "../components/Collect.vue";

export default new Router({
  routes: [
    {path: '/home',component:Home},
    {path: '/list',component:List},
    {path: '/add',component:Add},
    {path: '/detail',component:Detail},
    {path: '/collect',component:Collect}
  ]
});

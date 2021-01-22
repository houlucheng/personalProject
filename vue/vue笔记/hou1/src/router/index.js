import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue';
import List from '@/components/List.vue';
import Profile from '@/components/Profile.vue';
import Posts from '@/components/Posts.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            component: List
        },
        {
            path: '/Home/:hh',
            name: 'home',
            component: Home,
            children: [
                {
                    path: "",
                    component: Posts
                },
                {
                    path: 'pro',
                    name: "qq",
                    component: Profile
                },
                {
                    path: 'pos',
                    name: "ww",
                    component: Posts
                },
                {
                    path: "*",
                    component: Posts
                }
            ] 
        },
        {
            path: '/List/:ll',
            name: 'list',
            component: List
        },
        {
            path: "*",
            component: Home
        }

    ]
})
export default router;
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: "",
          redirect: "HomeNew"
        },
        {
          path: "HomeNew",
          component: () => import('@/components/HomeNew')
        }
      ]
    },
    {
      path: '/About',
      component: About
    },
    {
      path: "/User/:userId",
      component: User,
    },
    {
      path: "/Profile",
      component: () => import("../components/Profile.vue")
    }
  ],
  mode: "history",
  linkActiveClass: "active", // 修改选中tab的class
})

import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import User from '@/components/User'
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const User = () => import('@/components/User')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: '/Home',
      component: Home,
      meta: {
        title: "首页"
      },
      beforeEnter: (to, from, next) => {
        console.log("hahaha")
        next();
      },
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
      component: About,
      meta: {
        title: "关于"
      }
    },
    {
      path: "/User/:userId",
      component: User,
      meta: {
        title: "用户"
      }
    },
    {
      path: "/Profile",
      component: () => import("../components/Profile.vue")
    }
  ],
  mode: "history",
  linkActiveClass: "active", // 修改选中tab的class
})

// router.beforeEach((to, from, next) => {
//   console.log(to.matched[0].meta.title);
//   next()  
// })
export default router

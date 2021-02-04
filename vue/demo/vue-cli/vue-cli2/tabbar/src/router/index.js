import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/category.vue")
const cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/category",
      component: Category
    },
    {
      path: "/cart",
      component: cart
    },
    {
      path: "/profile",
      component: Profile
    }
    
  ]
})

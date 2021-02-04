import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/category.vue")
const cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/Home"
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Category",
      component: Category
    },
    {
      path: "/cart",
      component: cart
    },
    {
      path: "/Profile",
      component: Profile
    }
    
  ]
})

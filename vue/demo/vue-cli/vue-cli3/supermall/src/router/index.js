import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/category.vue")
const cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

const routes = [
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
export default new VueRouter({
  routes,
  mode: "history"
})
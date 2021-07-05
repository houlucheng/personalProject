import Index from "../pages/admin/dashboard";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNoFound from "../pages/PageNoFound";

export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNoFound
  }
]

export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: Index
  },
  {
    path: '/admin/products',
    component: List,
    exact: true
  },
  {
    path: "/admin/products/edit/:id",
    component: Edit
  }
]
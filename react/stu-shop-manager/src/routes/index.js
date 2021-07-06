import Index from "../pages/admin/dashboard";
import Edit from "../pages/admin/products/Edit";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";
import PageNoFound from "../pages/PageNoFound";
import { ProjectTwoTone } from '@ant-design/icons';

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
    component: Index,
    isShow: true,
    title: "看板",
    icon: ProjectTwoTone
  },
  {
    path: '/admin/products',
    component: List,
    exact: true,
    isShow: true,
    title: "商品管理",
    icon: "shop"
  },
  {
    path: "/admin/products/edit/:id",
    component: Edit,
    isShow: false
  }
]
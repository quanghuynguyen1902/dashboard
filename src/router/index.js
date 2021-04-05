import Vue from "vue";
import VueRouter from "vue-router";
import Paths from "@/constants/paths";
import Container from "@/Container/Container";
import Dashboard from "@/views/Dashboard";
import Users from "@/views/Users";
import UserDetail from "@/views/UserDetail";
Vue.use(VueRouter);

const routes = [
  {
    path: Paths.HOME,
    name: "Home",
    component: Container,
    children: [
      {
        path: Paths.DASHBOARD,
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: Paths.USERS,
        name: "Users",
        component: Users
      },
      { path: Paths.USER_DETAILS, component: UserDetail }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

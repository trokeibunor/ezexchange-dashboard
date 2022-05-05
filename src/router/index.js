import { createRouter, createWebHistory } from "vue-router";
import dashHome from "../views/dashboard/dashHome.vue";
import dashUsers from "../views/dashboard/dashUsers.vue";
import dashCoin from "../views/dashboard/dashCoin.vue";

const routes = [
  {
    path: "/",
    name: "dashboardHome",
    component: dashHome,
  },
  {
    path: "/users",
    name: "dashboarduser",
    component: dashUsers,
  },
  {
    path: "/coin",
    name: "dashCoin",
    component: dashCoin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import dashHome from "../views/dashHome.vue";
import dashUsers from "../views/dashUsers.vue";
import dashCoin from "../views/dashCoin.vue";

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

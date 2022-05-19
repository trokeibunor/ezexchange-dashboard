import { createRouter, createWebHistory } from "vue-router";
import dashHome from "../views/dashHome.vue";
import dashUsers from "../views/dashUsers.vue";
import dashCoin from "../views/dashCoin.vue";
import dashCard from "../views/dashCard.vue";
import dashArticle from "../views/dashArticle.vue";
import signUp from "../views/adminSignUp.vue";
import addAdmin from "../views/addAdmin.vue";
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
  {
    path: "/card",
    name: "dashCard",
    component: dashCard,
  },
  {
    path: "/articles",
    name: "dashArticles",
    component: dashArticle,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/add-admin",
    name: "addAdmin",
    component: addAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

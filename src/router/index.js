import { createRouter, createWebHistory } from "vue-router";
import dashHome from "../views/dashHome.vue";
import dashUsers from "../views/dashUsers.vue";
import dashCoin from "../views/dashCoin.vue";
import dashCard from "../views/dashCard.vue";
import dashArticle from "../views/dashArticle.vue";
import signUp from "../views/adminSignUp.vue";
import addAdmin from "../views/addAdmin.vue";
import store from "@/store";
var adminDetail = store.state.admin;
adminDetail.name = localStorage.getItem("adminName");
adminDetail.email = localStorage.getItem("adminEmail");
adminDetail.loggedIn = localStorage.getItem("loggedIn");
var checker = adminDetail.loggedIn;
console.log(checker);
const routes = [
  {
    path: "/home",
    name: "dashboardHome",
    component: dashHome,
    meta: { mustBeLogged: true },
  },
  {
    path: "/users",
    name: "dashboarduser",
    component: dashUsers,
    meta: { mustBeLogged: true },
  },
  {
    path: "/coin",
    name: "dashCoin",
    component: dashCoin,
    meta: { mustBeLogged: true },
  },
  {
    path: "/card",
    name: "dashCard",
    component: dashCard,
    meta: { mustBeLogged: true },
  },
  {
    path: "/articles",
    name: "dashArticles",
    component: dashArticle,
    meta: { mustBeLogged: true },
  },
  {
    path: "/",
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
router.beforeEach((to, _, next) => {
  if (to.meta.mustBeLogged) {
    if (checker == false) {
      next({ name: "signUp" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

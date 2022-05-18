import { createStore } from "vuex";
import admin from "./modules/admin";
import coins from "./modules/coins";

export default createStore({
  modules: {
    admin,
    coins,
  },
});

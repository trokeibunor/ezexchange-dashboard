import { createStore } from "vuex";
import admin from "./modules/admin";
import coins from "./modules/coins";
import cards from "./modules/cards";

export default createStore({
  modules: {
    admin,
    coins,
    cards,
  },
});

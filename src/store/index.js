import { createStore } from "vuex";
import admin from "./modules/admin";
import coins from "./modules/coins";
import cards from "./modules/cards";
import articles from "./modules/articles";

export default createStore({
  modules: {
    admin,
    coins,
    cards,
    articles,
  },
});

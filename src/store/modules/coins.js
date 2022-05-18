import { db } from "../../db";
import { getDoc, collectionGroup, query } from "firebase/firestore";

export default {
  namespaced: true,
  state() {
    return {
      items: [],
    };
  },
  actions: {
    async getCoins({ commit }) {
      const coinQuery = query(collectionGroup(db, "coins"));
      const snapshot = await getDoc(coinQuery);
      const coins = snapshot.docs.map((doc) => {
        const data = doc.data();
        return data;
      });
      commit("setCoins", coins);
    },
  },
  mutations: {
    async setCoins(state, coins) {
      state.items = coins;
    },
  },
};

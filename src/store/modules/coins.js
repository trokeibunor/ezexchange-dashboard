import { db } from "../../db";
import {
  getDoc,
  collectionGroup,
  query,
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useToast } from "vue-toastification";
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
    async postCoins(
      _,
      { coinName, coinCode, coinSellPrice, coinBuyPrice, file }
    ) {
      var storage = getStorage();
      const storageRef = ref(storage, coinName);
      const uploadResult = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadResult.ref);

      await setDoc(doc(db, "coins", coinCode), {
        coinName,
        coinCode,
        fetcher: coinCode + "USD",
        coinSellPrice,
        coinBuyPrice,
        downloadUrl,
      });
      var toast = useToast();
      toast.info("coin added to database");
    },
  },
  mutations: {
    async setCoins(state, coins) {
      state.items = coins;
    },
  },
};

import { db } from "../../db";
import {
  setDoc,
  getDocs,
  collection,
  doc,
  deleteDoc,
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
      const querySnapshot = await getDocs(collection(db, "coins"));
      const coins = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // delete properties that are not neccesary
        delete dataObject.downloadUrl;
        delete dataObject.fetcher;
        coins.push({ ...dataObject });
        commit("setCoins", coins);
      });
    },
    async deleteCoin(_, coinCode) {
      await deleteDoc(doc(db, "coins", coinCode));
      const toast = useToast();
      toast.error(`The Coin ${coinCode} has been deleted`);
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

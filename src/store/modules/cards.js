import { db } from "@/db";
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
    async getCards({ commit }) {
      const querySnapshot = await getDocs(collection(db, "cards"));
      const cards = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // delete properties that are not neccesary
        delete dataObject.downloadUrl;
        delete dataObject.fetcher;
        cards.push({ ...dataObject });
        commit("setCards", cards);
      });
    },
    async deleteCard(_, cardName) {
      await deleteDoc(doc(db, "cards", cardName));
      const toast = useToast();
      toast.error(`The Card ${cardName} has been deleted`);
    },
    async postCards(
      _,
      { cardName, cardDescription, cardSellPrice, cardBuyPrice, file, img }
    ) {
      var storage = getStorage();
      const storageRef = ref(storage, cardName);
      const secondStorageRef = ref(storage, `${cardName} Image`);
      const uploadResult = await uploadBytes(storageRef, file);
      const uploadSecondResult = await uploadBytes(secondStorageRef, img);
      const downloadUrlFile = await getDownloadURL(uploadResult.ref);
      const downloadUrlImg = await getDownloadURL(uploadSecondResult.ref);
      await setDoc(doc(db, "cards", cardName), {
        cardName,
        cardSellPrice,
        cardBuyPrice,
        cardDescription,
        cardlogo: downloadUrlFile,
        cardImg: downloadUrlImg,
      });
      var toast = useToast();
      toast.info(`${cardName} added to database`);
    },
  },
  mutations: {
    async setCards(state, cards) {
      state.items = cards;
    },
  },
};

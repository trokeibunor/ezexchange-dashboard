// Import db form database
import { db } from "@/db";
// article addition
import {
  setDoc,
  doc,
  collection,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Import vue-Toast
import { useToast } from "vue-toastification";
export default {
  nameSpaced: true,
  state() {
    return {
      articles: [],
      resources: [],
    };
  },
  actions: {
    async getArticles({ commit }) {
      const querySnapshot = await getDocs(collection(db, "articles"));
      const articles = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        articles.push({ ...dataObject });
        commit("setArticles", articles);
      });
    },
    async getResources({ commit }) {
      const querySnapshot = await getDocs(collection(db, "resources"));
      const resources = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        resources.push({ ...dataObject });
        commit("setResources", resources);
      });
    },
    async addArticle(_, { title, file, content }) {
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);

      // push to firebase
      await setDoc(doc, "articles", title),
        {
          title,
          downloadUrl,
          content,
          Timestamp,
        };
      var toast = useToast();
      toast.info("Article Added to database");
    },
  },
  mutations: {
    async setArticles(state, articles) {
      state.articles = articles;
    },
    async setResources(state, resources) {
      state.resources = resources;
    },
  },
};

// Import db form database
import { db } from "@/db";
// article addition
import {
  setDoc,
  doc,
  collection,
  serverTimestamp,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// Import vue-Toast
import { useToast } from "vue-toastification";
export default {
  namespaced: true,
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
    async addArticle(_, { title, file, content, selectedGroup, timeToRead }) {
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadArticle = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);

      // push to firebase
      await setDoc(doc(db, "articles", title), {
        title,
        link: downloadUrl,
        content: content,
        group: selectedGroup,
        time: timeToRead,
        created: serverTimestamp(),
      });
      var toast = useToast();
      toast.info("Article Added to database");
    },
    async deleteArticle(_, title) {
      await deleteDoc(doc(db, "articles", title));
      const toast = useToast();
      toast.error(`The Aritcle -- ${title} has been deleted`);
    },
    async addResource(_, { title, file, content, timeToRead }) {
      var storage = getStorage();
      const storageRef = ref(storage, title);
      const uploadResouce = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadResouce.ref);

      // push to fire base
      await setDoc(doc(db, "resources", title), {
        title,
        link: downloadUrl,
        content: content,
        time: timeToRead,
        created: serverTimestamp,
      });
      var toast = useToast();
      toast.info("Resource Added to database");
    },
    async deleteResource(_, title) {
      await deleteDoc(doc(db, "resources", title));
      const toast = useToast();
      toast.error(`The Resource -- ${title} has been deleted`);
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

// Import db form database
import { db } from "@/db";
// article addition
import { setDoc, doc, getDoc, Timestamp } from "firebase/firestore";
// Import vue-Toast
import { useToast } from "vue-toastification";
export default {
  nameSpaced: true,
  actions: {
      async addArticle (_, {})
  }
};

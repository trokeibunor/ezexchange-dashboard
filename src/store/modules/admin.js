// Import db from database
import { db } from "@/db";
import router from "@/router";
// Admin Registration and authentication
import { setDoc, doc, getDoc } from "firebase/firestore";
// Import vue-Toast
import { useToast } from "vue-toastification";
export default {
  namespaced: true,
  state() {
    return {
      admin: {
        name: "",
        email: "",
        loggedIn: false,
      },
    };
  },
  mutations: {
    isLoggedIn(state) {
      state.admin.loggedIn = true;
    },
    loggedOut(state) {
      const toast = useToast();
      state.admin.loggedIn = false;
      if (localStorage) {
        localStorage.setItem("adminName", "");
        localStorage.setItem("adminEmail", "");
        localStorage.setItem("loggedIn", false);
        toast.info("Admin Logged Out");
      }
    },
    admin(state, { user, email }) {
      state.admin.name = user;
      state.admin.email = email;
    },
  },
  actions: {
    async register(_, { name, email, password }) {
      await setDoc(doc(db, "admin", email), {
        name,
        email,
        password,
      });
      router.push("/");
    },
    async login({ commit }, { email, password }) {
      const docRef = doc(db, "admin", `${email}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const toast = useToast();
        const admin = docSnap.data();
        console.log(admin);
        if (password == admin.password) {
          commit("isLoggedIn");
          commit("admin", {
            user: admin.name,
            email: admin.email,
          });
          // store to local storage
          if (localStorage) {
            localStorage.setItem("adminName", admin.name);
            localStorage.setItem("adminEmail", admin.email);
            localStorage.setItem("loggedIn", true);
            toast.info("Login Successful");
          }
          router.push("/home");
        } else {
          toast.error("Please check your email or password");
        }
      } else {
        // Get toast interface
        const toast = useToast();
        toast.error("Please check your email or password");
      }
    },
    logOut({ commit }) {
      commit("loggedOut");
      router.push("/");
    },
  },
};

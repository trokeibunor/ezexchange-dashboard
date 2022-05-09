// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const firebaseConfig = {
  apiKey: "AIzaSyDuF8B4uLhiNqIUkbV4mNncwPaazE1eoGE",
  authDomain: "ezexchange-391f7.firebaseapp.com",
  projectId: "ezexchange-391f7",
  storageBucket: "ezexchange-391f7.appspot.com",
  messagingSenderId: "239529270671",
  appId: "1:239529270671:web:22d2e1c42f99277a5a3ffa",
  measurementId: "G-7XVW8X5LM2",
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

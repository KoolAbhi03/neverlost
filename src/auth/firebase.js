import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseapp= initializeApp({
  apiKey: "AIzaSyBcvSgvMGbci34dTOYn3XBJtPU9HQTYYGs",
  authDomain: "never-lost-643e9.firebaseapp.com",
  projectId: "never-lost-643e9",
  storageBucket: "never-lost-643e9.appspot.com",
  messagingSenderId: "19266551382",
  appId: "1:19266551382:web:63bbd115ba0ee7165c05f7"
});

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
export {auth,db};
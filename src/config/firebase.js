import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlztMMVXKXA5oSVpwe0XthJ6TWNe31BSo",
  authDomain: "fir-course-beba9.firebaseapp.com",
  projectId: "fir-course-beba9",
  storageBucket: "fir-course-beba9.appspot.com",
  messagingSenderId: "236316955671",
  appId: "1:236316955671:web:2b18d92e1b6644fae3f852",
  measurementId: "G-HENJ7D82KH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

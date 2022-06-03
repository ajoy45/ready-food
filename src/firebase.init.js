// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtl4F0Qe-O4BkCHiMo_cD07ROp2ZNpRgE",
  authDomain: "ready-food-32078.firebaseapp.com",
  projectId: "ready-food-32078",
  storageBucket: "ready-food-32078.appspot.com",
  messagingSenderId: "620634789282",
  appId: "1:620634789282:web:aeb7e255736e20928e0efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
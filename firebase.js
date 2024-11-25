// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRGHrqg5fH96iT9_oOfaBljcyxUJYBAJ4",
  authDomain: "ffootwear-dbaf0.firebaseapp.com",
  projectId: "ffootwear-dbaf0",
  storageBucket: "ffootwear-dbaf0.firebasestorage.app",
  messagingSenderId: "450533448453",
  appId: "1:450533448453:web:32f911fdefaf985ebcb56c",
  measurementId: "G-DLTM70CBC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const db = getFirestore(app);

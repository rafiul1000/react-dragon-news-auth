// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf_dPdcOoRdfGCTN74JoKsKeeuH2pS6UQ",
  authDomain: "react-dragon-news-auth-1c21e.firebaseapp.com",
  projectId: "react-dragon-news-auth-1c21e",
  storageBucket: "react-dragon-news-auth-1c21e.appspot.com",
  messagingSenderId: "217741867834",
  appId: "1:217741867834:web:918a44c6e8eedd5aa36e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
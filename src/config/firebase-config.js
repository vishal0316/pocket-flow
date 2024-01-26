// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMcSyj-6znSHkxEGTUf2I-0dRg9HNgiG8",
  authDomain: "pocketflow-23b77.firebaseapp.com",
  projectId: "pocketflow-23b77",
  storageBucket: "pocketflow-23b77.appspot.com",
  messagingSenderId: "949567298741",
  appId: "1:949567298741:web:1783ff6098c278f2b172fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

//firebase login
// init and deploy

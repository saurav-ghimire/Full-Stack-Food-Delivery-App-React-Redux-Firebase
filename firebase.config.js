import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa5IAwQXQvDGd4s53rbEMqQweOkDQhPJI",
  authDomain: "food-delivery-28d7c.firebaseapp.com",
  databaseURL: "https://food-delivery-28d7c-default-rtdb.firebaseio.com",
  projectId: "food-delivery-28d7c",
  storageBucket: "food-delivery-28d7c.appspot.com",
  messagingSenderId: "697747003677",
  appId: "1:697747003677:web:c0af5019b84fb0f3aca9f4",
  measurementId: "G-9P2QN58Y5D"
};

// Initialize Firebase

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
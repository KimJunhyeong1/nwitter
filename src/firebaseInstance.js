import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPbV4o2zH76dhw7JkommQTbTI87OdyeAM",
  authDomain: "nwitter-1d80f.firebaseapp.com",
  projectId: "nwitter-1d80f",
  storageBucket: "nwitter-1d80f.appspot.com",
  messagingSenderId: "358655136745",
  appId: "1:358655136745:web:4aebabb917818b47af7178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage(app);

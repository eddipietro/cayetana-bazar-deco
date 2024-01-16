import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvlP2xc0CP0H7B82PLKWdHQW6TL681iug",
  authDomain: "cayetana-deco.firebaseapp.com",
  projectId: "cayetana-deco",
  storageBucket: "cayetana-deco.appspot.com",
  messagingSenderId: "554851448286",
  appId: "1:554851448286:web:de44b9b210711bfc97d94f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

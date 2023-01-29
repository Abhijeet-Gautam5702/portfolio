import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKi8Wv1B58Nb4yX1D7Fnd3EQ0eOXLbp9E",
  authDomain: "personal-portfolio-21a17.firebaseapp.com",
  projectId: "personal-portfolio-21a17",
  storageBucket: "personal-portfolio-21a17.appspot.com",
  messagingSenderId: "163174147468",
  appId: "1:163174147468:web:0a9214035917f2fa7ee2a9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collectionRef = collection(db, "messages");

export { db, collectionRef };

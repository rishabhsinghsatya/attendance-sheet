import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzzIH0YnF5990ZIUp0qFknYJex2Ffck3g",
  authDomain: "attendance-project-bc98c.firebaseapp.com",
  projectId: "attendance-project-bc98c",
  storageBucket: "attendance-project-bc98c.appspot.com",
  messagingSenderId: "1087208457683",
  appId: "1:1087208457683:web:759848dab670cf3c761b26",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

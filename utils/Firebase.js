import firebase, { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0Txy1aoJJAEURHsHCF0j0jg35vWjc-xs",
    authDomain: "portafoliobd-7f0a9.firebaseapp.com",
    databaseURL: "https://portafoliobd-7f0a9-default-rtdb.firebaseio.com",
    projectId: "portafoliobd-7f0a9",
    storageBucket: "portafoliobd-7f0a9.appspot.com",
    messagingSenderId: "345718888938",
    appId: "1:345718888938:web:877c5064797eb627543a93",
    measurementId: "G-RXF5LC141M"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
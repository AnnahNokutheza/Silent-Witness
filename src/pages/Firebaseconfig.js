
import 'firebase/database';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";



// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig  = {
  apiKey: "AIzaSyDPvX5DvXytWFns_fonQqb8HmH5xawyWbI",
  authDomain: "crimereportform.firebaseapp.com",
  databaseURL: "https://crimereportform-default-rtdb.firebaseio.com",
  projectId: "crimereportform",
  storageBucket: "crimereportform.appspot.com",
  messagingSenderId: "1081593214820",
  appId: "1:1081593214820:web:6f2177972c9528b226ec71",
  measurementId: "G-MFPY1ERSWP"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  export { app, db };

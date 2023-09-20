import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyB5YR5TNjo3Fe-fb4FkL8Mwro8IrMRs1qo",
  authDomain: "silent-witness-eef3c.firebaseapp.com",
  projectId: "silent-witness-eef3c",
  storageBucket: "silent-witness-eef3c.appspot.com",
  messagingSenderId: "843932255813",
  appId: "1:843932255813:web:5213105840305590e5c52c",
  measurementId: "G-MH21HKBDTH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export { auth, db };


import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut
} from 'firebase/auth';

import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDWR14knwXVJkTabg9HB9jJC9CdTPetF7M",
    authDomain: "buildit-hackathon.firebaseapp.com",
    projectId: "buildit-hackathon",
    storageBucket: "buildit-hackathon.firebasestorage.app",
    messagingSenderId: "1066110368316",
    appId: "1:1066110368316:web:57361607300ab6c8b1a139"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
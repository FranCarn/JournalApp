import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCiUbAtRbF59K8jBzjenkeBy16o7oXP5lk",
  authDomain: "journalapp-c61d1.firebaseapp.com",
  projectId: "journalapp-c61d1",
  storageBucket: "journalapp-c61d1.appspot.com",
  messagingSenderId: "1045708796533",
  appId: "1:1045708796533:web:be1a16cfd8f14e54963e3c",
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

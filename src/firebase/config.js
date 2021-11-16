// import * as firebase from 'firebase/app';
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/storage';
import 'firebase/firestore';
// import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { serverTimestamp } from "firebase/firestore";


import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Get a non-default Storage bucket
var firebaseConfig = {
  // apiKey: "AIzaSyAX1swNtGXdDRwBLx_40u0a8h9xqksKa6g",
  // authDomain: "gallerypagedemo.firebaseapp.com",
  // projectId: "gallerypagedemo",
  // storageBucket: "gallerypagedemo.appspot.com",
  // messagingSenderId: "284061055193",
  // appId: "1:284061055193:web:6a318041823a7c80e166c8",
  // measurementId: "G-DJKX0N8SMN"


  // apiKey: "AIzaSyBzSEFvoyQOj-RHhJ_6Qlm3wXM1_z5sbUs",
  // authDomain: "lokesh-vishnu-consignment.firebaseapp.com",
  // projectId: "lokesh-vishnu-consignment",
  // databaseURL : "gs://lokesh-vishnu-consignment.appspot.com",
  // storageBucket: "lokesh-vishnu-consignment.appspot.com",
  // messagingSenderId: "367203566547",
  // appId: "1:367203566547:web:ad24b565e03984393da526",
  // measurementId: "G-DG3RRRX6Y8"

  // apiKey: "AIzaSyCmX1pr_dLvO4lpwT3xnHr4guEhejv97Ts",
  // authDomain: "loki-demo-4ef60.firebaseapp.com",
  // projectId: "loki-demo-4ef60",
  // databaseURL : "https://console.firebase.google.com/project/loki-demo-4ef60/storage/loki-demo-4ef60.appspot.com/files",
  // storageBucket: "loki-demo-4ef60.appspot.com",
  // messagingSenderId: "741965007354",
  // appId: "1:741965007354:web:0cc347f23eefe48220fc43",
  // measurementId: "G-54Z4L18D2R"

  apiKey: "AIzaSyCf8oWFpV5CXMw3h-ljuGdink1QViPJW08",
  authDomain: "mygallery-73ec4.firebaseapp.com",
  projectId: "mygallery-73ec4",
  databaseURL:"https://console.firebase.google.com/project/mygallery-73ec4/storage/mygallery-73ec4.appspot.com/files",
  storageBucket: "mygallery-73ec4.appspot.com",
  messagingSenderId: "146868815583",
  appId: "1:146868815583:web:eabe126f21574bbbba4b6a",
  measurementId: "G-HJY05WLPJR"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const timestamp = serverTimestamp();
// const firebaseApp = getApp();
const Storage = getStorage(app);



export { Storage, db ,timestamp,app};




// LoginFunctionality 

const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}


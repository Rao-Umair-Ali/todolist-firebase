import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBXsIJ4d60EkfYIoQh2hk07pcZRKARGYj8",
    authDomain: "todo-list-7f6fe.firebaseapp.com",
    projectId: "todo-list-7f6fe",
    storageBucket: "todo-list-7f6fe.appspot.com",
    messagingSenderId: "1034040578185",
    appId: "1:1034040578185:web:7d5ba37e33a26c48ef7658",
    measurementId: "G-RP97VY4GT9"
  };


  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app);










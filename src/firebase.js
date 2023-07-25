// import firebase from "firebase";


// import { initializeApp } from 'firebase/compat/app';
// import { getAuth } from "firebase/compat/auth";
// import { GoogleAuthProvider } from "firebase/auth";
// import { Firestore } from "firebase/firestore";
// import {storage} from 'firebase/compat/storage';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import "firebase/compat/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAIhoH1Vqw8PRV_zIaS_VPS2zpyz8ln3LQ",
    authDomain: "disneyplus-clone-1f3a4.firebaseapp.com",
    projectId: "disneyplus-clone-1f3a4",
    storageBucket: "disneyplus-clone-1f3a4.appspot.com",
    messagingSenderId: "966004127959",
    appId: "1:966004127959:web:2f41cddff60cd8d8f89892",
    measurementId: "G-LKNGY47LJ5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  // const firebaseApp =initializeApp(firebaseConfig);
  // const db = Firestore();
  // const auth =getAuth(firebaseApp);
  // const provider = new GoogleAuthProvider();
  // const storage = storage();
  
  export { auth, provider, storage };
  // console.log(db);
  export default db;
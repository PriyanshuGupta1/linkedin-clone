// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import{getAuth} from "firebase/auth"
// import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDj0DHixzSGdMh7OO8xhPqFpj7YYsMHtxc",
    authDomain: "linkedin-clone-d837f.firebaseapp.com",
    projectId: "linkedin-clone-d837f",
    storageBucket: "linkedin-clone-d837f.appspot.com",
    messagingSenderId: "488192815003",
    appId: "1:488192815003:web:3bd6b7f33c5c3e10ff7b3e",
    measurementId: "G-WQ8LKXGDW5"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
// connect our database with firebase.intializeApp
  const db=firebase.firestore(firebaseApp);
  const auth =firebase.auth();
  export {db,auth};
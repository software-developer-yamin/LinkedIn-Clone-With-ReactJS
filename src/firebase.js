import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
     apiKey: "AIzaSyD5gRLZ-eBR1KLCE213MKCOuYSQrJQODgk",
     authDomain: "linkedin-clone-with-reactjs.firebaseapp.com",
     projectId: "linkedin-clone-with-reactjs",
     storageBucket: "linkedin-clone-with-reactjs.appspot.com",
     messagingSenderId: "1014421886260",
     appId: "1:1014421886260:web:456ae33ee9841e6c930161",
     measurementId: "G-MGT4PEG9VP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

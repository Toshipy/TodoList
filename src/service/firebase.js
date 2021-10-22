import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


firebase.initializeApp({
    apiKey: "AIzaSyDk1U1tuUyn0a0obJz2ZiCIIVRM8aV0LlA",
    authDomain: "react-todo-pwa-42e3a.firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "react-todo-pwa-42e3a",
    storageBucket: "react-todo-pwa-42e3a.appspot.com",
    messagingSenderId: "601553445744",
    appId: "1:601553445744:web:e4894c24f6b3d1974025b5",
    measurementId: "601553445744" 
});

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const signInWithGoogle = () => {
    
    firebase.auth().signInWithPopup(googleProvider)
    .then((result) => {
        console.log(result.user);
    })  
    .catch((error) => {
        console.log(error.message);
    });
};


export const logOut = () => {
    firebase.auth().signOut()
    .then(() => {
        console.log("logged out");
        document.location.reload();
    })
    .catch((error) => {
        console.log(error.message);
    });
};

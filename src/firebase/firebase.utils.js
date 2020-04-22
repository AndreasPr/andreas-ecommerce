import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNXN9QJ-P5-ciRm89o99OQhzqzhw5QZgo",
    authDomain: "react-ecommerce-db-5e9a1.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-5e9a1.firebaseio.com",
    projectId: "react-ecommerce-db-5e9a1",
    storageBucket: "react-ecommerce-db-5e9a1.appspot.com",
    messagingSenderId: "366510925339",
    appId: "1:366510925339:web:aa1ccc3703d606ab4b3abe"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth)
    {
        return;
    }

    // We query from database for Document reference object based on userAuth Object
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //Using the UserReference, we call the get() to take the Snapshot Object 
    const snapShot = await userRef.get();
    
    // Even if we don't have actual User Object in database, firestore would give us a snapshot object 
    // and we check if exists or not.
    // if does not exist...
    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            // create a new Document Object inside of UserRef and database, using the set()
            await userRef.set({displayName, email, createdAt, ...additionalData})
        }
        catch(error){
            console.log("Error creating user", error.message);
        }  
    }

    return userRef;
};



export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection; 
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
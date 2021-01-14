import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

// Asynchronous logic of redux-saga
export function* fetchCollectionsAsync(){

    const collectionRef = firestore.collection('collections');

    try{
        // When the value comes back (from collectionRef.get()), it comes back with a promised 
        // form that gets resolved with the value of our collection ref which is snapshot.
        // This means that the value goes into this yield statement and it will set into the snapshot value that
        // we have declared
        const snapShot = yield collectionRef.get();
        // We are yielding this call, so it allows us to defer control at this point of the execution back to 
        // the saga middleware
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);  
        
        // Put create an action in Saga - Output an object that it is expecting to have a type and payload
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }



        // Begins the Asynchronous request...
        // collectionRef.get().then(snapShot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

        //     // Dispatch this success once this asynchronous request resolved 
        //     dispatch(fetchCollectionsSuccess(collectionsMap));
        // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

// export function* fetchCollectionItemAsync(collectionId){
//     console.log("CollectionId from params: ",collectionId.collectionId.charAt(0).toUpperCase() + collectionId.collectionId.slice(1));
//     const docRef = firestore.collection('collections').where('title', '==', collectionId.collectionId.charAt(0).toUpperCase() + collectionId.collectionId.slice(1));
    
//     try{
//         const snapShot = yield docRef.get();
 
//         const docMap = yield call(returnTheDocument, snapShot, collectionId.id); 
//         yield put(fetchCollectionItemSuccess(docMap));
//     }catch(error){
//         yield put(fetchCollectionItemFailure(error.message));
//     }
// }

export function* fetchCollectionsStart(){
    // We use takeLatest to start a new fetchCollectionsAsync task 
    // on each dispatched FETCH_COLLECTIONS_START action to the Store
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}
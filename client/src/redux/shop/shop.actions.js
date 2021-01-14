import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

// Redux Thunk does not care about action objects (for example: fetchCollectionsFailure), instead 
// it is going to catch the fetchCollectionsStartAsync because return a function. And as soon as redux thunk
// sees a function through the tunel (middleware), it is going to "interested in about the returned function".
// It is going to give the dispatch functionality as parameter. So now, I can dispatch to my reducer the 
// normal objects that actually needs. And later, we give the action objects to the route reducer.   


//This action switches our reducers "isFetching" state 
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

//This is the actual function that we pass into components to begin this process, in case we use Redux Thunk
export const fetchCollectionsStartAsync = () => {
    // Return the function that gets a dispatch
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        //Because of redux-thunk library, we are dispatching the moment that this function gets called 
        dispatch(fetchCollectionsStart());

        // Begins the Asynchronous request...
        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

            // Dispatch this success once this asynchronous request resolved 
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};

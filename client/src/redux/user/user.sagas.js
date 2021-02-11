import {takeLatest, put, all, call} from 'redux-saga/effects';
import {UserActionTypes} from './user.types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions';
import axios from 'axios';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        // signInSuccess update the user reducer using the object we are passing
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    }catch(error){
        yield put(signInFailure(error));
    }
};
export function* signInWithGoogle(){
    try{
        // We are taking the auth user object with the details of the user for each user key  
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
};
export function* signInWithEmail({payload: {email, password}}){
    try{


        //-----MongoDB Sign In Email
        const emailAndPassword = {
            email,
            password
        }
        yield axios.post('/signin', emailAndPassword)
        .then((res) => {console.log(res.data.user[0]); console.log("Token: ",res.data.token)})
        .catch(error => {throw error});
        //-----MongoDB Sign In Email



        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(signInFailure(error));
    }
};
export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth){
            return;
        }
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error));
    }
};
export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error));
    }
};


export function* signUp({payload: {displayName, email, password}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);



        //-----MongoDB Insertion
        const information = {
            displayName,
            email,
            password
        }
        yield axios.post('/signin', information)
        .then(() => console.log("User saved!"))
        .catch(error => console.log("Error in post: ", error));
        //-----MongoDB Insertion




        yield put(signUpSuccess({user, additionalData: {displayName} }));
    }catch(error){
        yield put(signUpFailure(error));
    }
};
export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);
};





export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};
export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};
export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
};
export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};
export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}


export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), 
        call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
};
import {takeLatest, put, all, call} from 'redux-saga/effects';
import {UserActionTypes} from './user.types';
// import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions';
import axios from 'axios';
import setAuthToken from  '../../utils/setAuthToken';

// export function* getSnapshotFromUserAuth(userAuth, additionalData){
//     try{
//         const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
//         const userSnapshot = yield userRef.get();
//         // signInSuccess update the user reducer using the object we are passing
//         yield put(signInSuccess({
//             id: userSnapshot.id,
//             ...userSnapshot.data()
//         }));
//     }catch(error){
//         yield put(signInFailure(error));
//     }
// };


// export function* signInWithGoogle(){
//     try{
//         // We are taking the auth user object with the details of the user for each user key  
//         const {user} = yield auth.signInWithPopup(googleProvider);
//         yield getSnapshotFromUserAuth(user);
//     }catch(error){
//         yield put(signInFailure(error));
//     }
// };

//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------
export function* signInWithEmail({payload: {email, password}}){
    try{


        //-----MongoDB Sign In Email
        const emailAndPassword = {
            email,
            password
        }
        const info =  yield axios.post('/api/signin', emailAndPassword)
        .then((res) => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
        .catch(error => {throw error});
        //-----MongoDB Sign In Email


        // const {user} = yield auth.signInWithEmailAndPassword(email, password);
        // yield getSnapshotFromUserAuth(user);

        yield put(signInSuccess({
            id: info.user._id,
            email: info.user.email,
            password: info.user.password
        }));

    }catch(error){
        yield put(signInFailure(error));
    }
};
//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------


//------------------FIREBASE-------------------------------------------------
// export function* isUserAuthenticated(){
//     try{
//         const userAuth = yield getCurrentUser();
//         if(!userAuth){
//             return;
//         }
//         yield getSnapshotFromUserAuth(userAuth);
//     }catch(error){
//         yield put(signInFailure(error));
//     }
// };

// export function* signOut(){
//     try{
//         yield auth.signOut();
//         yield put(signOutSuccess());
//     }catch(error){
//         yield put(signOutFailure(error));
//     }
// };
//------------------FIREBASE-------------------------------------------------


//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------
export function* isUserAuth(){
    try{
        const infoFromToken = yield localStorage.getItem("user");
        if(infoFromToken){
            const infoFromTokenParse = JSON.parse(infoFromToken);
            yield put(signInSuccess({
                id: infoFromTokenParse.user._id,
                email: infoFromTokenParse.user.email,
                password: infoFromTokenParse.user.password
            }));
        }
    }catch(err){
        yield put(signInFailure(err));
    }
}
export function* logoutUser(){
    try{
        localStorage.removeItem("user");
        setAuthToken(false);
        yield put(signOutSuccess());
    }catch(error){
        yield put(signOutFailure(error));
    }
};
//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------


//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------
export function* signUp({payload: {displayName, email, password}}){
    try{

        //----------------------------FIREBASE-----------------------------
        // const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        // yield put(signUpSuccess({user, additionalData: {displayName} }));
        //----------------------------FIREBASE----------------------------

        //-----MongoDB Insertion
        const information = {
            displayName,
            email,
            password
        }
        const savedData = yield axios.post('/api/signin', information)
        .then((res) =>{console.log("User saved!"); return res.data; })
        .catch(error => console.log("Error in post: ", error));
        //-----MongoDB Insertion
        yield put(signUpSuccess({user: savedData, additionalData: {displayName} }));

    }catch(error){
        yield put(signUpFailure(error));
    }
};
//-----------------MongoDB DONEEEEEEEEEEEEE!!!!------------------------------


export function* signInAfterSignUp({payload: {user, additionalData}}){
    // yield getSnapshotFromUserAuth(user, additionalData);  

    let email = user.email;
    let password = user.password;
    try{
        //-----MongoDB Sign In Email
        const emailAndPassword = {
            email,
            password
        }

        const info =  yield axios.post('/api/signin', emailAndPassword)
        .then((res) => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
        .catch(error => {throw error});
        //-----MongoDB Sign In Email

        yield put(signInSuccess({
            email: info.user.email,
            password: info.user.password
        }));

    }catch(error){
        yield put(signInFailure(error));
    }
};


export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth)
};
// export function* onGoogleSignInStart(){
//     yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
// };
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};
export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, logoutUser);
};
export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};
export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// call(onGoogleSignInStart),
export function* userSagas(){
    yield all([ call(onEmailSignInStart), 
        call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)]);
};
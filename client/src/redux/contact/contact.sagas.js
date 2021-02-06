import {takeLatest, put, all, call} from 'redux-saga/effects';
import {ContactTypes} from './contact.types';
import {contactSuccess, contactFailure} from './contact.actions';
// import {addContactInfo} from '../../firebase/firebase.utils';
import axios from 'axios';

export function* contactMessage({payload: {firstname, lastname, email, message}}){
    try{
        // const info = addContactInfo({firstname, lastname, email, message})
        // .then(() => {
        //     // alert("Your message has been submitted successfully!");
        // });
        const info = {
            firstname,
            lastname,
            email,
            message
        }
        axios.post('http://localhost:3000/contact' || 'https://andreas-ecommerce.herokuapp.com/contact', info)
        .then(res => console.log(res.data));
        
        yield put(contactSuccess({info}));
    }catch(error){
        yield put(contactFailure(error));
    }
};

export function* afterContactMessage({payload: {successMessage, additionalData}}){
};

export function* onContactStart(){
    yield takeLatest(ContactTypes.CONTACT_START, contactMessage);
};
export function* onContactSuccess(){
    yield takeLatest(ContactTypes.CONTACT_SUCCESS, afterContactMessage);
};
export function* contactSagas(){
    yield all([call(onContactStart), call(onContactSuccess)]);
};
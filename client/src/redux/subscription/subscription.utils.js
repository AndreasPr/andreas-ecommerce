// import {addSubscription} from '../../firebase/firebase.utils';
import axios from 'axios';

export const addSubscriptionEmail = (emailToAdd) => {
    // const result = addSubscription(emailToAdd);
    const result = axios.post('http://localhost:5000', emailToAdd)
    .then(res => alert("Thank you for your subscription!"));

    return result;
}
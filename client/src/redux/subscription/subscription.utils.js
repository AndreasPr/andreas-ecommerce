import {addSubscription} from '../../firebase/firebase.utils';

export const addSubscriptionEmail = (emailToAdd) => {
    const result = addSubscription(emailToAdd);
    return result;
}
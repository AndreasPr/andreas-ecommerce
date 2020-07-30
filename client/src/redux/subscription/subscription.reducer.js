import SubscriptionActionTypes from './subscription.types';
import {addSubscriptionEmail} from './subscription.utils';

const INITIAL_STATE = {
    email: null
};

const subscriptionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SubscriptionActionTypes.ADD_SUBSCRIPTION:
            return{
                ...state,
                email: addSubscriptionEmail(action.payload)
            }
        default:
            return state
    }
};
export default subscriptionReducer;
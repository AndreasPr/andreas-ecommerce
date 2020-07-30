import SubscriptionActionTypes from'./subscription.types';

export const addSubscription = emailInfo => ({
    type: SubscriptionActionTypes.ADD_SUBSCRIPTION,
    payload: emailInfo
});
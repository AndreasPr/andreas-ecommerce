import {createSelector} from 'reselect';

const storeContactInfo = state => state.contact;

export const getSuccessOrFail = createSelector([storeContactInfo], (contact) => contact.successOrFail);
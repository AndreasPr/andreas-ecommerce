import {ContactTypes} from './contact.types';

export const contactStart = (contactInfo) => ({
    type: ContactTypes.CONTACT_START,
    payload: contactInfo
});

export const contactSuccess = ({info}) => ({
    type: ContactTypes.CONTACT_SUCCESS,
    payload: {info}
});

export const contactFailure = (error) => ({
    type: ContactTypes.CONTACT_FAILURE,
    payload: error
});
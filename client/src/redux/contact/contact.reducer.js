import {ContactTypes} from './contact.types';

const INITIAL_STATE = {
    currentContactInfo: null,
    error: null,
}

const contactReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case ContactTypes.CONTACT_START:
            return {
                ...state
            };
        case ContactTypes.CONTACT_SUCCESS: 
            return {
                ...state,
                currentContactInfo: action.payload,
                error: null,
                successOrFail: true
            };
        case ContactTypes.CONTACT_FAILURE:
            return {
                ...state,
                error: action.payload,
                successOrFail: false
            };
        case ContactTypes.CONTACT_STATUS_UPDATE:
            return {
                ...state,
                successOrFail: false
            };
        default:
            return state;
    }
};
export default contactReducer;
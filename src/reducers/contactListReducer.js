import * as constants from '../actions/actionCreator';

const contacts = [];

const initialState = {
    contacts: contacts,
    loadingContactList: false,
    processingCard:false
};


const contactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCHING_CONTACT_LIST:
            return {
                ...state,
                loadingContactList: true,
            };
        case constants.UPDATE_CONTACT_LIST_STORE:
             return {
                 ...state,
                 contacts: action.payload,
                 loadingContactList: false,
             };
        case constants.DELETING_CONTACT:
            return{
                ...state,
                processingCard: true
            }

        case constants.DELETED_CONTACT:
           const newstate = state.contacts.filter(contact => contact.contactUID !== action.payload )
            return{
                contacts: newstate,
                processingCard: false
            }

        case constants.ADDING_CONTACT:
            return{
                ...state,
                processingCard: true
            }

        case constants.ADDED_CONTACT:
            return{
                contacts: [...state.contacts],
                processingCard:false
            }

        default:
            return state;
    }
}


export default contactListReducer;

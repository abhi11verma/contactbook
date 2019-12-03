import getData from "../API/getData";


const FETCH_CONTACT_LIST = '[CONTACT LIST] FETCH_CONTACT_LIST';
const UPDATE_CONTACT_LIST_STORE = '[CONTACT LIST] UPDATE_CONTACT_LIST_STORE';
const UPDATE_CONTACT_LIST_UI = '[CONTACT LIST] UPDATE_CONTACT_LIST_UI';


const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = 'SHOW_LOADING';


export const fetchContactList = () => {
     return dispatch => {
         dispatch({ type: FETCH_CONTACT_LIST });
         getData()
            .then(res => {
                dispatch(updateContactList(res.data.records));
            })
            .catch(err => {

            });
    }
};

export const updateContactList = contacts => ({
    type: UPDATE_CONTACT_LIST_STORE,
    payload: contacts,
});


export {
    FETCH_CONTACT_LIST,
    UPDATE_CONTACT_LIST_STORE,
}


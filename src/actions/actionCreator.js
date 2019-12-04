import getData from "../API/getData";
import deleteData from "../API/deleteData";
import postData from "../API/postData";


const FETCHING_CONTACT_LIST = '[CONTACT LIST] FETCHING_CONTACT_LIST';
const UPDATE_CONTACT_LIST_STORE = '[CONTACT LIST] UPDATE_CONTACT_LIST_STORE';
const DELETED_CONTACT = '[CONTACT LIST] DELETED_CONTACT';
const DELETING_CONTACT = '[CONTACT LIST] DELETING_CONTACT';


const ADDING_CONTACT = '[CONTACT FORM] ADDING_CONTACT';
const ADDED_CONTACT = '[CONTACT FORM] ADDED_CONTACT';


export const addContact = (contact) => {
    return (dispatch) => {
        dispatch({type: ADDING_CONTACT});
        postData(contact)
            .then(response => dispatch(fetchContactList()))
            .catch(err => console.log(err)).finally(() => dispatch({type:ADDED_CONTACT}))
    }
}


export const deleteContact = (id) => {
    return (dispatch) => {
        dispatch({type:DELETING_CONTACT});
        deleteData(id)
            .then(response =>
            {   console.log("DElete response",response);
                return dispatch({type:DELETED_CONTACT , payload: id })
            })
            .catch(err => console.log("Some Error",err));
    }
}

export const fetchContactList = () => {
     return (dispatch) => {
         dispatch({ type: FETCHING_CONTACT_LIST });
         getData()
            .then(res => {
                dispatch(updateContactList(res.data.records));
            })
            .catch(err => {
                console.log("SomeError in Fetching",err);
            });
    }
};

export const updateContactList = contacts => ({
    type: UPDATE_CONTACT_LIST_STORE,
    payload: contacts,
});


export {
    FETCHING_CONTACT_LIST,
    UPDATE_CONTACT_LIST_STORE,
    DELETED_CONTACT,
    DELETING_CONTACT,
    ADDING_CONTACT,
    ADDED_CONTACT
}


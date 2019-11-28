import React from 'react';


const contacts = [
    {
        contactUID:1,
        contact_name: "Peter",
        contact_number: 837437923,
        contact_organisation: "Samanvay"
    },
    {
        contactUID:2,
        contact_name: "Tom",
        contact_number: 364732373,
        contact_organisation: "Google"

    }

];

const newContact = {
    contactUID:Math.random(),
    contact_name: "NEW",
    contact_number: 8393939393,
    contact_organisation: "SAM"
};

const initialState = {
    contacts : contacts
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === "ADD_CONTACT"){

        return ({
            contacts:newState.contacts.concat({...newContact})
        })


    }
    return newState;
}


export default reducer;

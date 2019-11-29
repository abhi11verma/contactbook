import React from 'react';


const contacts = [];

const initialState = {
    contacts : contacts,
    loadingContactList : true
};



const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === "FETCHED_ALL_CONTACTS"){
        console.log("ActionVAlue", action.value.data.records);
        return ({
            contacts:action.value.data.records,
            loadingContactList: false
        })


    }
    return newState;
}


export default reducer;

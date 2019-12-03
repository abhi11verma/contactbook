import React from 'react';
import * as constants from '../actions/actionCreator';
import getData from "../API/getData";
import {UPDATE_CONTACT_LIST_UI} from "../actions/actionCreator";

const contacts = [];

const initialState = {
    contacts: contacts,
    loadingContactList: false,
};


const reducer = (state = initialState, action) => {
    const newState = {...state};
    console.log("Current State",state,"| Action->",action.type);
    switch (action.type) {
        case constants.FETCH_CONTACT_LIST:
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
        default:
            return newState;
    }

    // if(action.type === "ALL_DATA_RECEIVED"){
    //     return ({
    //         contacts:action.payload,
    //         loadingContactList: false
    //     })
    //
    //
    // }else if(action.type === "DATA_POSTED"){
    //    return({
    //        dataPostedID:action.payload
    //    })
    // }else if(action.type === "DATA_DELETED"){
    //     console.log("deleted", action.payload);
    // }
    // return newState;
}


export default reducer;

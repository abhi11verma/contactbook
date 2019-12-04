import { combineReducers } from "redux";
import contactListReducer from './contactListReducer';



const rootReducer = combineReducers({
    contactList : contactListReducer
})


export default rootReducer;

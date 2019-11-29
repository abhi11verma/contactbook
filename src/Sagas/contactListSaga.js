import { takeLatest, put, call} from 'redux-saga/effects';
import * as URL from '../Common/apiDefaults'
import getData from '../API/FechData';
const axios = require('axios').default;

function* getAllContacts() {
    try {
        const data = yield call(axios.get,URL.API_GETALL);
        yield put({type:"FETCHED_ALL_CONTACTS",value:data})

    }catch (e) {
        console.log("ErrorSAGAFetch",e)
    }
}


function* saveContact(data) {
    try {
        const response = yield call(axios.post,URL.API_ADD,data.value)
        yield put({type:"GET_ALL_CONTACTS"})
    }catch (e) {
        console.log("SomeError in Adding to DB");
    }
   //
   //
   // axios.post(URL.API_ADD,data.value,{crossdomain:true}).then(response => {
   //      console.log("Added Record with ID",response.data);
   //  }).catch(error => console.log(error))
   //      .finally(()=>console.log("Contact Posted Successfully"));
}


export function* sagaWatcher() {
    yield takeLatest('SAVE_CONTACT',saveContact)
    yield takeLatest('GET_ALL_CONTACTS', getAllContacts)

}

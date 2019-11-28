import {createStore} from 'redux';
import reducer from '../Reducers/contactListReducer'

const store = createStore(reducer);

export default store;


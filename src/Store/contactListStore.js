import {createStore, applyMiddleware} from 'redux';
import reducer from '../Reducers/contactListReducer'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from '../Sagas/contactListSaga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher);

export default store;


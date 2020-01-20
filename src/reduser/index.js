import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    user: usersReducer,
    firestore: firestoreReducer
});

export default rootReducer;
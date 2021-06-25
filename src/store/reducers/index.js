import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    hospital: fetchReducer,
    userData: userReducer,
    error: errorReducer
});
export default rootReducer;

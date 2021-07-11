import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';
import successReducer from './successReducer';
import unitsReducer from './unitsReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    hospital: fetchReducer,
    userData: userReducer,
    errors: errorReducer,
    success: successReducer,
    unitsData: unitsReducer
});
export default rootReducer;

import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';


const rootReducer = combineReducers({
    hospital: fetchReducer
});
export default rootReducer;

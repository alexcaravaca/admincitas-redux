import {combineReducers} from 'redux';
import CitasReducer from './CitasReducer';
import errorReducer from './errorReducer';
export default combineReducers({
    appoitments: CitasReducer,
    error: errorReducer
});
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers';

//const initailState = {};

const middleware = [thunk];

// local storage 
const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];


const store = createStore(mainReducer, storageState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;
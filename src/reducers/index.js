//import all the reducers
import counterRecuder from  './counter';
import loggedReducer from './isLogged';
import productsReducer from './products'
import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggerReducer from './isLogged';

const allReducers = combineReducers({
    myCounter: counterReducer,
    isLogged: loggerReducer,
    productsReducer
})


export default allReducers;
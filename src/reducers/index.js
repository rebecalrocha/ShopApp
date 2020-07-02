//import all the reducers
import loggerReducer from './isLogged';
import productsReducer from './products'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loggerReducer,
    productsReducer
})


export default allReducers;
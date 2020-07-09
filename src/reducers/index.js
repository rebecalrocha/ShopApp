// import all the reducers
import loggerReducer from './isLogged'
import productsReducer from './products'
import messageReducer from './message'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  loggerReducer,
  productsReducer,
  messageReducer
})

export default allReducers

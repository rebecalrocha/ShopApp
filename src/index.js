import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import allReducer from './reducers'
import { Provider } from 'react-redux'
import { loadState, saveState } from './localStorage'

const persistedStates = loadState()

// STORE -> HOLD GLOBALIZED STATE
const store = createStore(
  allReducer,
  persistedStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

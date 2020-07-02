import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

//STORE -> HOLD GLOBALIZED STATE
let store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}r>
      <App />,
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();

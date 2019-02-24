import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools( 
    applyMiddleware(thunk)
  )
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();

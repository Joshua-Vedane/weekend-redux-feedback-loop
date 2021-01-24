import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const feelingReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_FEELING':
      return action.payload;
    case 'CLEAR_DATA':
      return state = 0;
    default:
      return state;
  }
};
const understandingReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_UNDERSTANDING':
      return action.payload;
    case 'CLEAR_DATA':
      return state = 0;
    default:
      return state;
  }
};
const supportReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_SUPPORT':
      return action.payload;
    case 'CLEAR_DATA':
      return state = 0;
    default:
      return state;
  }
};
const commentReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return action.payload;
    case 'CLEAR_DATA':
      return state = 0;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

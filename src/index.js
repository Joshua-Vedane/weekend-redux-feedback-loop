import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const feelingReducer = (state = 0, action) => {
  switch(action.type){
    case 'ADD_FEELING': 
      return action.payload;
    default:
      return state;
  }
};
const understandingReducer = (state = 0, action) => {
  switch(action.type){
    case 'ADD_UNDERSTANDING':
      return action.payload;
    default: 
      return state;
  }
};
const supportReducer = (state = 0, action) => {
  return state;
};
const commentReducer = (state = "", action) => {
  return state;
};
const feedbackReducer = (state = [], action) => {
  return state;
};



const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
    feedbackReducer

  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const feelingReducer = (state = [], action) => {

};
const understandingReducer = (state = [], action) => {

};
const supportReducer = (state = [], action) => {

};
const commentReducer = (state = [], action) => {

};
const feedbackReducer = (state = [], action) => {

};



const reduxStore = createStore(
  combineReducers({

  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

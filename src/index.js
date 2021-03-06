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
    default:
      return state;
  }
};
const understandingReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_UNDERSTANDING':
      return action.payload;
    default:
      return state;
  }
};
const supportReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_SUPPORT':
      return action.payload;
    default:
      return state;
  }
};
const commentReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return action.payload;
    default:
      return state;
  }
};

// I wanted a way to reset Reducers without repeating it for each reducer. Found information on this from:
//  https://medium.com/@asher.cassetto.cohen/resetting-redux-state-with-a-root-reducer-bonus-how-to-reset-state-selectively-e2a008d0de61
// Also got help from pod classmates Michael Dunn and Collin Radichel 

const appReducer = combineReducers({
  feelingReducer, 
  understandingReducer, 
  supportReducer, 
  commentReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    state = undefined;
  }
  return appReducer(state, action);
}

const storeInstance = createStore(
  rootReducer,
  applyMiddleware(logger)
  
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

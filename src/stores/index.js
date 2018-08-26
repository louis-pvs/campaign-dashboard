import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authStore from './authStore';

const rootReducers = combineReducers({
  authStore
});

export default createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);

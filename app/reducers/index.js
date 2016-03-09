import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import request from './request';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  counter,
  request,
  errorMessage,
  routing
});

export default rootReducer;

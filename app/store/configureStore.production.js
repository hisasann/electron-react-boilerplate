import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import api from '../api/sample-api';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, api, router);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

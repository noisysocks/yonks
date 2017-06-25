import logger from 'redux-logger';
import persistState from 'redux-localstorage';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import posts from './ducks/posts';

const reducer = combineReducers({ posts });
const enhancer = compose(applyMiddleware(logger), persistState());

export default function configureStore() {
  return createStore(reducer, enhancer);
}

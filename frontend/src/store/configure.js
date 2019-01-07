import { createStore, applyMiddleware } from 'redux';
//import penderMiddleware from 'redux-pender';
import * as modules from './modules';

//const reducers = combineReducers(modules);
//const middlewares = [penderMiddleware()];

// 개발 모드일 때만 Redux Devtools 적용
/*
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;
*/
// preloadedState는 추후 서버사이드 렌더링이 되었을 때 전달 받는 초기 상태입니다.
const configure = () => {
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
  const store = createStore(modules, devtools);
  return store;
}
/*
createStore(reducers, preloadedState, composeEnhancers(
  applyMiddleware(...middlewares)
));
*/
export default configure;

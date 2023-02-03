import {applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [thunk];

const middlewareEnhancer = applyMiddleware(...middleware);

const storeEnhancers = [middlewareEnhancer];

const devToolsEnhnacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = devToolsEnhnacer(...storeEnhancers);

const store = configureStore({
  reducer: rootReducer,
  composedEnhancers,
});

export default store;

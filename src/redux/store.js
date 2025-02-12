import { createStore, applyMiddleware, compose } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { thunk } from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// import asyncFunctionMiddleware from './middlewares/asyncFunctionMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore ({
//     reducer: rootReducer,
//     middleware: [thunk],
//     devTools: true,
// })

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
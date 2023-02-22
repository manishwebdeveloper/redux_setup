import React from "react";
import { rootReducer } from "./reducer";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))
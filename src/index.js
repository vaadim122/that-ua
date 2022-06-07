import React from "react";
import { render } from "react-dom";
import App from "./App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { taskReducer } from "./redux/reducers/tasks.reducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

const rootReducer = combineReducers({ taskReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const root = document.querySelector("#root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

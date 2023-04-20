import React from "react";
import { StrictMode } from "react";
import { render } from "react-dom";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { filmsReducer } from "./redux/reducers/tasks.reducer";
import { listReducer } from "./redux/reducers/list.reducer";
import { linkingCodeReducer } from "./redux/reducers/addinstagram.reducer";
import { profileReducer } from "./redux/reducers/profile.reducer";
import { profilesPublicReducer } from "./redux/reducers/publicProfiles.reducer";
import { recomendationReducer } from "./redux/reducers/recomendation.reducer";
import {
  publicReducer,
  publicListReducer,
} from "./redux/reducers/public.reducer";

import { AuthProvider } from "react-oidc-context";

import configuration from "./store/configuration";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

const rootReducer = combineReducers({
  profileReducer,
  filmsReducer,
  listReducer,
  publicReducer,
  publicListReducer,
  linkingCodeReducer,
  profilesPublicReducer,
  recomendationReducer,
});

const root = document.querySelector("#root");
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
  <StrictMode>
    <AuthProvider {...configuration}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </StrictMode>,
  root
);

serviceWorkerRegistration.register();

reportWebVitals();

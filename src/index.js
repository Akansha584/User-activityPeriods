import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { dataReducer } from "./store/reducer/dataReducer";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  dataReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, ReduxPromise));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

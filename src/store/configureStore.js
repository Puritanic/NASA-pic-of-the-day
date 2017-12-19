import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "../reducers/rootReducer";

const Store = createStore(
  combineReducers({
    astronomy: rootReducer
  }),
  applyMiddleware(promise)
);

export default Store;

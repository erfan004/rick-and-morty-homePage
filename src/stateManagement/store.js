import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
export const store = createStore(reducers , applyMiddleware(thunk , logger))
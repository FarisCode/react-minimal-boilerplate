import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
  )
  // other store enhancers if any
);

// combining Middleware and Reducer to create store and export
export default () => createStore(createRootReducer(history), enhancer);
import { combineReducers, createStore } from "redux";
import { carsReducer } from "../slice/CarSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
});

const createMyStore = (reducer, enhancer = undefined) => {
  if (enhancer) {
  }

  const store = {};

  store.state = undefined;
  store.callbackFns = [];

  store.getState = () => {
    return store.state;
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.callbackFns.forEach((callbackFn) => callbackFn());
  };

  store.subscribe = (callbackFn) => {
    store.callbackFns.push(callbackFn);

    return () => {
      store.callbackFns = store.callbackFns.filter((fn) => fn !== callbackFn);
    };
  };

  store.dispatch({ type: "@INIT" });

  return store;
};

export const store = createMyStore(rootReducer);

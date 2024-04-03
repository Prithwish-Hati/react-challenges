import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  isPrivacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + action.payload };
  } else if (action.type === "SUBSTRACTION") {
    return { ...store, counter: store.counter - action.payload };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, isPrivacy: !store.isPrivacy };
  }

  return store;
};

export const counterStore = createStore(counterReducer);

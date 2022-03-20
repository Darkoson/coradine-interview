import { createStore } from "redux";
import { rootReducer } from "./app-state";

const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;

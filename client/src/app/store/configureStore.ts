import { createStore } from "redux";
import counterReducer from "../../features/contact/counterReducer.ts";

export function configureStore() {
  return createStore(counterReducer);
}
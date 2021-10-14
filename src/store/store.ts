import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import { rootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
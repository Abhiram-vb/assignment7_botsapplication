import cartReducer from "../Redux/cartReducer";
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
const store = createStore(cartReducer,applyMiddleware(logger))
console.log(store.getState())
export default store;
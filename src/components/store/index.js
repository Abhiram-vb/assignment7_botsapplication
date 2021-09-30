import cartReducer from "../Redux/cartReducer";
import { createStore } from "redux";

const store = createStore(cartReducer)
console.log(store.getState())
export default store;
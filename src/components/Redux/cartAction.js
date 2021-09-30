import { ADD_TO_CART } from "./cartType"
 function addToCart(eachData){
    return{
        type:ADD_TO_CART,
        payload:eachData
    }
}
export default addToCart
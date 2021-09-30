import {REMOVE_FROM_CART} from './cartRemoveType'
function removeFromCart(eachItem){
    return{
        type:REMOVE_FROM_CART,
        payload:eachItem
    }
}
export default removeFromCart
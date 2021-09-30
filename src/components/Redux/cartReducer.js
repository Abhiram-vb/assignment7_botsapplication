import { CART_ITEMS } from "./cartType";
import {REMOVE_FROM_CART} from './cartRemoveType'
const initialCartItems = {
    noOfCartItems:0,
}

const cartReducer = (state=initialCartItems,action)=>{
    switch (action.type) {
        case CART_ITEMS:
            return{
                noOfCartItems:state.noOfCartItems+1
            }    
        case REMOVE_FROM_CART:
            if(state.noOfCartItems>0){
                return{
                    noOfCartItems:state.noOfCartItems-1
                }
            }
            return initialCartItems
        default:
            return initialCartItems
    }
}
export default cartReducer
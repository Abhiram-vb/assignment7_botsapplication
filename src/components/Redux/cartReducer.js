import { ADD_TO_CART } from "./cartType";
import {REMOVE_FROM_CART} from './cartRemoveType'
const initialCartItems = {
    noOfCartItems:0,
    data:[
        {
        "id":1,
        "bot":"Hot Bot",
        "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":289.34,
        "cagr":34
        },
        {
        "id":2,
        "bot":"Cool Bot",
        "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":439.34,
        "cagr":28
        },
        {
        "id":3,
        "bot":"Options Bot",
        "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
        "index-value":139.34,
        "cagr":42
        }
        ],
        cartData:[]
}

const cartReducer = (state=initialCartItems,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const initialCart = state.cartData
            const isItemInCart = initialCart.filter(eachItem=>eachItem.id===action.payload.id)
            let updatedCart = null
            if(isItemInCart.length>0){
                updatedCart = initialCart.map(eachItem=>{
                    if(eachItem.id===action.payload.id){
                        return {...eachItem,"count":eachItem.count+1}
                    }
                    return eachItem}
                    )
            }
            else{
                const updatenewItem = {...action.payload,count:1}
                updatedCart = [...initialCart,updatenewItem]
            }
            console.log(updatedCart)
            return{
                ...state,
                cartData:updatedCart,
                noOfCartItems:state.noOfCartItems+1
            }   
        case REMOVE_FROM_CART:
            const initialCartForRemove = state.cartData
            let updatedCartForRemove = []
            if(initialCartForRemove.length>0){
                const isItemInCartForRemove = initialCartForRemove.filter(eachItem=>eachItem.id===action.payload.id)
                console.log(isItemInCartForRemove.length)
                if(isItemInCartForRemove.length>0){
                    updatedCartForRemove = initialCartForRemove

                    if(isItemInCartForRemove[0].count>1){
                        updatedCartForRemove = initialCartForRemove.map(eachItem=>{
                            if(eachItem.id===action.payload.id){
                                return {...eachItem,"count":eachItem.count-1}
                            }
                            return eachItem}
                            )
                        return{
                            ...state,
                            cartData:updatedCartForRemove,
                            noOfCartItems:state.noOfCartItems-1
                        } 
                    }
                    else{
                        updatedCartForRemove = initialCartForRemove.filter(eachItem=>eachItem.id!==action.payload.id)
                        return{
                            ...state,
                            cartData:updatedCartForRemove,
                            noOfCartItems:state.noOfCartItems-1
                        }
                    } 
                }
            else{
                updatedCartForRemove = initialCartForRemove
                alert("Selected Item is not in cart")
                return{
                    ...state,
                    cartData:updatedCartForRemove,
                    noOfCartItems:state.noOfCartItems
                } 
            }
        }
            else{
                updatedCartForRemove = initialCartForRemove
                alert("Cart Is Empty")
                return{
                    ...state,
                    cartData:updatedCartForRemove,
                    noOfCartItems:state.noOfCartItems
                } 
            }
        
        default:
            return initialCartItems
    }
}
export default cartReducer
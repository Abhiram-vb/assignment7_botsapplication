import {useSelector} from 'react-redux'

const CartItems = () =>{
    const cartData = useSelector(state => state.cartData)
    console.log(cartData)
    return(
        <div>
            {cartData.map(eachItem=>
            <div>
            <h1>{eachItem.bot}</h1>
            <h1>Count:{eachItem.count}</h1>
            </div>)}
        </div>
    )
}
export default CartItems
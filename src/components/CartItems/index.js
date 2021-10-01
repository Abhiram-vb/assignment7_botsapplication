import {useSelector} from 'react-redux'
import './index.css'
const CartItems = () =>{
    const cartData = useSelector(state => state.cartData)
    const wholeCartData = cartData.length===0?<div className="cartEmptyDiv">
        <h1 className="cartQuantity">Cart Is Empty</h1>
        <img src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" alt="cart is empty" className="cartEmptyImage"/>
                </div>:<h1 className="cartFull">Cart</h1>
    return(
        <div  className="cartBots">
            {wholeCartData}
            {cartData.map(eachItem=>
                <div className="eachCartBot">
                    <div className="eachBot">
                        <p className="cargHead">{eachItem.bot}</p>
                        <div className="indexValue">
                            <p className="cargHead">Index value</p>
                            <p className="cargPercent">{eachItem['index-value']}</p>
                        </div>
                        <div className="carg">
                            <h1 className="cargHead">CAGR</h1>
                            <p className="cargPercent">{eachItem.cagr}%</p>
                        </div>
                        <div className="buttons">
                            <h1 className="cargHead cartQuantity">Quantity:{eachItem.count}</h1>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default CartItems
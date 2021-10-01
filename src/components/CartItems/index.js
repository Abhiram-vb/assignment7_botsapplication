import {useSelector} from 'react-redux'
import './index.css'
const CartItems = () =>{
    const cartData = useSelector(state => state.cartData)
    return(
        <div  className="cartBots">
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
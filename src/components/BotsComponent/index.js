import {Link} from 'react-router-dom'
import './index.css'
import { useDispatch } from 'react-redux'
import addToCart from '../Redux/cartAction'
import removeFromCart from '../Redux/cartRemoveAction'
import { useSelector } from 'react-redux'
const BotsComponent = () =>{
    const data = useSelector(state => state.data)
    const dispatch = useDispatch();
    return(
        <div className="mainBots">
            {data.map(eachData=>
                <div className="eachBot">
                    <h1 className="botName">{eachData.bot}</h1>
                    <div className="indexValue">
                        <p className="cargHead">Index value</p>
                        <p className="cargPercent">{eachData['index-value']}</p>
                    </div>
                    <div className="carg">
                        <h1 className="cargHead">CAGR</h1>
                        <p className="cargPercent">{eachData.cagr}%</p>
                    </div>
                    <div className="buttons">
                    <Link to={`/bots-details/${eachData.id}`}>
                        <button className="viewAlgo">View algo</button>
                        </Link>
                        <button className="buy" onClick={()=>dispatch(addToCart(eachData))}>Buy</button>
                        <button className="remove" onClick={()=>dispatch(removeFromCart(eachData))}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default BotsComponent  
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import addToCart from '../Redux/cartAction'
import removeFromCart from '../Redux/cartRemoveAction'
import { useSelector } from 'react-redux'
import './index.css'
const EachBot = (props)=>{
    const data = useSelector(state => state.data)
    const {match} = props 
    const {params} = match
    let {id} = params
     id = parseInt(id)
    const newData = data.filter(eachData=>eachData.id===id)
    const dispatch = useDispatch();

    return(
        <div className=" widthClass">
            <div className="eachBot">
                <div>
                    <h1 className="botName">{newData[0].bot}</h1>
                    <p className="cargPercent">{newData[0].description}</p>
                </div>
                <div className="indexValue">
                    <p className="cargHead">Index value</p>
                    <p className="cargPercent">{newData[0]['index-value']}</p>
                </div>
                <div className="carg">
                    <h1 className="cargHead">CAGR</h1>
                    <p className="cargPercent">{newData[0].cagr}%</p>
                </div>
                <div className="buttons">
                    <Link to={`/`}>
                        <button className="viewAlgo">Back</button>
                    </Link>
                    <button className="buy" onClick={()=>dispatch(addToCart(newData[0]))}>Buy</button>
                    <button className="remove" onClick={()=>dispatch(removeFromCart(newData[0]))}>Remove</button>
                </div>
            </div>
        </div>
)}
    

export default EachBot
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import addToCart from '../Redux/cartAction'
import removeFromCart from '../Redux/cartRemoveAction'
import { useSelector } from 'react-redux'
const EachBot = (props)=>{
    const data = useSelector(state => state.data)
    const {match} = props 
    const {params} = match
    let {id} = params
     id = parseInt(id)
    const newData = data.filter(eachData=>eachData.id===id)
    const dispatch = useDispatch();

    return(
    <div>
        <Container>
                <Row className="row1">
                    <Col xs={4}>
                        <h1>{newData[0].bot}</h1>
                    </Col>
                    <Col xs={3}>
                            <p>Index value</p>
                            <p>{newData[0]['index-value']}</p>
                    </Col>
                    <Col xs={3}>
                            <h1>CAGR</h1>
                            <p>{newData[0].cagr}</p>
                    </Col>
                    <Col xs={2}>
                        <div className="buttons">
                        <Link to={`/`}>
                            <button>View alog</button>
                            </Link>
                            <button onClick={()=>dispatch(addToCart(newData[0]))}>Buy</button>
                            <button onClick={()=>dispatch(removeFromCart(newData[0]))}>Remove</button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
)}
    

export default EachBot
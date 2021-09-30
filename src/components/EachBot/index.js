import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import addToCart from '../Redux/cartAction'
import removeFromCart from '../Redux/cartRemoveAction'
const data =[
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
    ]
const EachBot = (props)=>{
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
                            <button onClick={()=>dispatch(addToCart())}>Buy</button>
                            <button onClick={()=>dispatch(removeFromCart())}>Remove</button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
)}
    

export default EachBot
import {Link} from 'react-router-dom'
import './index.css'

import { Container,Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import addToCart from '../Redux/cartAction'
import removeFromCart from '../Redux/cartRemoveAction'
const BotsComponent = (props) =>{
    const {bots} = props
    const dispatch = useDispatch();
    return(
        <div className="mainBots">
            {bots.map(eachData=>
                <Container>
                <Row className="row1">
                    <Col xs={4}>
                        <h1>{eachData.bot}</h1>
                    </Col>
                    <Col xs={3}>
                            <p>Index value</p>
                            <p>{eachData['index-value']}</p>
                    </Col>
                    <Col xs={3}>
                            <h1>CAGR</h1>
                            <p>{eachData.cagr}</p>
                    </Col>
                    <Col xs={2}>
                        <div className="buttons">
                        <Link to={`/bots-details/${eachData.id}`}>
                            <button>View alog</button>
                            </Link>
                            <button onClick={()=>dispatch(addToCart())}>Buy</button>
                            <button onClick={()=>dispatch(removeFromCart())}>Remove</button>
                        </div>
                    </Col>
                </Row>
            </Container>)}
            
        </div>
    )
}
export default BotsComponent  
import BotsComponent from '../BotsComponent'
import { useSelector } from 'react-redux'
import './index.css'
const MainComponent =()=>{
    const data = useSelector(state => state.data)
    return(
        <div className="cartvalue">
            <BotsComponent bots = {data}/>
        </div>
    )
}

export default MainComponent
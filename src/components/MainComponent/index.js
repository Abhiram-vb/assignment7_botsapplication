import { Component } from "react"
import BotsComponent from '../BotsComponent'
import './index.css'
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

class MainComponent extends Component {
    state = {data:data}
    render(){
        const {data} = this.state
        return(
            <div className="cartvalue">
                <BotsComponent bots = {data}/>
            </div>
        )
    }
}
export default MainComponent
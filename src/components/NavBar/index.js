import './index.css'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const NavBar = () =>{
    const cartValue = useSelector((state)=>state.noOfCartItems)
    return(
        <div>
            <h1 className="botsWelcome">Welcome To Bots App</h1>
            <div className="cartvalue">
            <Link to="/"><p>DashBoard</p></Link>
            <p className="noOfItemsInCart">No of Items In Cart: {cartValue}</p>
            <Link to="/cartItems">
                <div className="cartImageAndText">
                    <img alt="cartImage" 
                        src="https://media.istockphoto.com/photos/shopping-cart-vector-art-closeup-view-picture-id1251362621?b=1&k=20&m=1251362621&s=170667a&w=0&h=dRxDVhO60mUXTb3g5N5EFizNRm8Sq7xDKdmyeBeZTXQ=" 
                    className="cartImage"/>
                    <p className="cartText">OpenCart</p>
                </div>
            </Link>
        </div>
        </div>
    )
}
export default NavBar
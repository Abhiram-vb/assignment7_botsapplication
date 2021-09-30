import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const NavBar = () =>{
    const cartValue = useSelector((state)=>state.noOfCartItems)
    return(
        <div className="cartvalue">
            cart={cartValue}
            <Link to="/cartItems"><p>OpenCart</p></Link>
        </div>
    )
}
export default NavBar
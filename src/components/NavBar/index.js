import { useSelector } from "react-redux"
const NavBar = () =>{
    const cartValue = useSelector((state)=>state.noOfCartItems)
    return(
        <div className="cartvalue">
            cart={cartValue}
        </div>
    )
}
export default NavBar

import CartIcon from "../../assets/shopping-cart.png";
import { FaOpencart } from "react-icons/fa6";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartWidget = ({
    onClick,
    className = ""
}) => {
    const {cart} = useContext(CartContext);
    className += ' p-3'
    return(
        <div role="button" onClick={onClick} className={className}>
            <FaOpencart fontSize={`2rem`}/> 
            {cart.length > 0 ? <span className="badge bg-danger position-absolute top-0 end-0 " style={{fontSize:"10px"}}>{cart.map(item => item.qty).reduce((a,b) => a + b)}</span> : null}
        </div>
    );
}
export default CartWidget;
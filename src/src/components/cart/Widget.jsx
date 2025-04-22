
import CartIcon from "../../assets/shopping-cart.png";
import { FaOpencart } from "react-icons/fa6";

const CartWidget = ({
    onClick,
    className = ""
}) => {
    return(
        <div role="button" onClick={onClick} className={className}>
        <FaOpencart fontSize={`2rem`}/>
        </div>
    );
}
export default CartWidget;
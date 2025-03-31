
import CartIcon from "../../assets/shopping-cart.png";
import { FaOpencart } from "react-icons/fa6";

const CartWidget = ({
    onClick
}) => {
    return(
        <div role="button" onClick={onClick}>
        <FaOpencart fontSize={`2rem`}/>
        </div>
    );
}
export default CartWidget;
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartForm = () => {
    const {cart} = useContext(CartContext);
    return (cart.length === 0 
        ? <></>
        : <form>
            
        </form>
    )
};
export default CartForm;
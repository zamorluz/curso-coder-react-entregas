import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { _store } from "../../services/storeService";

const CartTotals = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [qty, setQty] = useState(0);
    
    useEffect(() => {
        setTotal(cart
            .map(item => item.price * item.qty)
            .reduce((a,b) => a + b, 0)
        );
        setQty(cart
            .map(item => item.qty)
            .reduce((a,b) => a + b, 0)
        )
    }, [cart.values()]);
    return (
        <div className="d-flex flex-column">
            <h5>Total: ${total}</h5>
            <h5>Items: {qty}</h5>
        </div>
    );
}
export default CartTotals;
